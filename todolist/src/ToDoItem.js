import React from 'react';

function ToDoItem({ item, onDelete }) {
  return (
    <li>
      {item} <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDoItem;
