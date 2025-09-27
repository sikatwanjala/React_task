import React, { useState } from 'react';

export default function ItemForm({ onAdd }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please enter a todo');
      return;
    }
    const ok = onAdd(text);
    if (ok) {
      setText('');
      setError('');
    }
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="What do you want to do?"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn" type="submit">Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
