import React, { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Filter from './components/Filter';

const STORAGE_KEY = 'flexitems.items.v1';

export default function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function additem(text) {
    const trimmed = text.trim();
    if (!trimmed) return false;
    setItems(prev => [
      { id: Date.now(), text: trimmed, completed: false },
      ...prev,
    ]);
    return true;
  }

  function toggleitem(id) {
    setItems(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function deleteItem(id) {
    setItems(prev => prev.filter(t => t.id !== id));
  }

  function clearCompleted() {
    setItems(prev => prev.filter(t => !t.completed));
  }

  const filteredItems = items.filter(item => {
    if (filter === 'active') return !item.completed;
    if (filter === 'completed') return item.completed;
    return true;
  });

  return (
    <div className="app-root">
      <header className="header">
        <h1>Crude Application With React</h1>
        <p className="subtitle">Simple React crude application for tasks</p>
      </header>

      <main className="card">
        <ItemForm onAdd={additem} />
        <div className="controls">
          <Filter value={filter} onChange={setFilter} />
          <button
            className="btn btn-small"
            onClick={clearCompleted}
            disabled={!items.some(t => t.completed)}
          >
            Clear completed
          </button>
        </div>
        < ItemList items={filteredItems} onToggle={toggleitem} onDelete={deleteItem} />
        {items.length === 0 && <p className="empty">No Item added yet. Add one!</p>}
      </main>

      <footer className="footer">
        Built with React • Persistent with localStorage
      </footer>
    </div>
  );
}
