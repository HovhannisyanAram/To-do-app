import React from 'react';

import "./index.css"

function TodoListItem({ label, onDelete, done, important, onToggleDone, onToggleImportant }) {

  let classes = "todo-list-item";
  if(done) {
    classes += " done"
  };

  if(important) {
    classes += " important"
  };

  return (
    <span className={classes}>
      <span 
        onClick={onToggleDone}
        className="todo-list-item-label"
      >
        {label}
      </span>
      <button onClick={onToggleImportant} className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"></i>
      </button>
      <button onClick={onDelete} className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
}

export default  TodoListItem;