import React from 'react';

interface Props {
  onChange: (value: 'none' | 'priority' | 'status') => void;
}

const SortFilter: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="mb-2">
      <select onChange={e => onChange(e.target.value as any)} className="border px-2 py-1">
        <option value="none">No Sorting</option>
        <option value="priority">Sort by Priority</option>
        <option value="status">Sort by Status</option>
      </select>
    </div>
  );
};

export default SortFilter;
