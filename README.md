# React TODO App

A simple a TODO application built with React and TypeScript.  
Users can add tasks, set priorities, frequencies, and define dependencies between tasks (e.g., Task A cannot be completed before Task B).

---

## Project Structure

todo-app/
│
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   │   ├── SortFilter.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   └── TaskSearch.tsx
│   │
│   ├── features/   # Feature-specific logic
│   │   └── tasks/
│   │       ├── TaskContext.tsx
│   │       ├── taskReducer.ts
│   │       ├── types.ts
│   │       └── useTaskManager.ts
│   │
│   ├── utils/      # Utility functions
│   │   └── taskUtils.ts
│   │
│   ├── App.tsx              # Main app component
├── App.test.tsx         # Unit tests
├── index.tsx            # Entry point
└── index.css            # Global styles


---

## Key Features

- **Add Tasks:** Create new tasks with title, priority, and frequency.
- **Task Dependencies:** Define dependencies between tasks (e.g., Task A depends on Task B).
- **Mark as Done:** Complete tasks (only if dependencies are done).
- **Sort & Search:** Sort tasks by priority or status, and search by title.
- **Elegant UI:** Responsive and clean interface using modern CSS.

---

## Scripts

- `npm start` — Start the development server
- `npm test` — Run unit tests
- `npm run build` — Build for production

---

## Getting Started

1. Install dependencies:

npm install

2. Start the app:

npm start

3. Open [http://localhost:3000](http://localhost:3000) in browser.

---

## Testing

Run all tests with:

3. Open [http://localhost:3000](http://localhost:3000) in  browser.

---

## Testing

Run all tests with:

npm test