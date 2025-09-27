import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <div className="filter">
      <label>
        <input type="radio" checked={value === 'all'} onChange={() => onChange('all')} /> All
      </label>
      <label>
        <input type="radio" checked={value === 'active'} onChange={() => onChange('active')} /> Active
      </label>
      <label>
        <input type="radio" checked={value === 'completed'} onChange={() => onChange('completed')} /> Completed
      </label>
    </div>
  );
}
