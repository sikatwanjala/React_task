import React from 'react';

export default function Item({ item, onToggle, onDelete }) {
  return (
    <li className={`item ${item.completed ? 'completed' : ''}`}>
      <label className="item-label">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={onToggle}
        />
        <span className="item-text">{item.text}</span>
      </label>
      <button className="btn btn-small" onClick={onDelete}>Delete</button>
    </li>
  );
}
