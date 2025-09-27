import React from 'react';
import Item from './Item';

export default function ItemList({ items, onToggle, onDelete }) {
  return (
    <ul className="item-list">
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onToggle={() => onToggle(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
}
