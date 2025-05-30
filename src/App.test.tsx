import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders To Do List heading', () => {
  render(<App />);
  const heading = screen.getByText(/To Do List/i);
  expect(heading).toBeInTheDocument();
});

test('can add a new task and see it in the list', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/task title/i);
  const addButton = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: 'Sample Task' } });
  fireEvent.click(addButton);
  const items = screen.getAllByRole('listitem');
  expect(items.some(item => item.textContent?.toLowerCase().includes('sample task'))).toBe(true);
});