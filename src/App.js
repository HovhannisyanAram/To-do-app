import React, { useState } from 'react';

import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ItemAddForm from './components/ItemAddForm';
import ItemStatusFilter from './components/ItemStatusFilter';

let itemId = 100;

const createTodoItem = (label) => {
  return {
    label,
    done: false,
    id: itemId++,
    important: false,
  };
};

function App() {

  const [todoData, setTodoData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome app'),
    createTodoItem('Create React App'),
  ]);

  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all')
  
  const deleteItem = id => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex(item => item.id === id);

      return [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    })
  };

  const onToggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(item => item.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  const onToggleDone = id => {
    setTodoData((todoData) => onToggleProperty(todoData, id, 'done'))
  };


  const onToggleImportant = id => {
      setTodoData((todoData) => onToggleProperty(todoData, id, 'important'))
  };

  const addItem = text => {
    setTodoData((todoData) => [...todoData, createTodoItem(text)])
  }

  const search = (items, term) => {
    if(term.length === 0) {
      return items
    }
    return items.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  const onSearchChange = (term) => {
    setTerm(term);
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const filters = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(({ done }) => !done);
      case 'done':
        return items.filter(({ done }) => done)
      default:
        return items;
    };
  };

  const visibleItems = filters(search(todoData, term), filter)
  const doneCount = todoData.filter(elem => elem.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="todo-app container">
        <AppHeader todo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel
            value={term}
            onSearchChange={onSearchChange}
          />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDelete={deleteItem}
          onToggleDone={onToggleDone}
          onToggleImportant={onToggleImportant}
        />
        <ItemAddForm addItem={addItem} />
    </div>
  )
}

export default App;
