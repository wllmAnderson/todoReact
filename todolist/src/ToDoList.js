import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <ToDoItem key={index} item={item} onDelete={() => deleteItem(index)} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
