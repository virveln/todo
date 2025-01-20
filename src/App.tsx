// npm create vite@latest . --template react-ts
// npm run dev - för att köra appen

import React, { useState } from 'react';
import { Todo } from './components/types';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import StatusCounterFilter from './components/StatusCounterFilter';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Todo['status'] | null>(null);

  const filteredTodos = filter ? todos.filter((todo) => todo.status === filter) : todos;

  return (
    <div className='app-container'>
      <div className='outer-form-container'>
        <AddTodo
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className='tasks-container'>
        <StatusCounterFilter
          todoCount={todos.filter((todo) => todo.status === 'todo').length}
          inProgressCount={todos.filter((todo) => todo.status === 'in-progress').length}
          completedCount={todos.filter((todo) => todo.status === 'completed').length}
          setFilter={setFilter}
        />
        <div className='todo-list-container'>
          {filteredTodos.length === 0 ? (
            <>
              {filter === null && (
                <p className="no-todo">No todo's added yet. Start by adding a new task!</p>
              )}
              {filter === 'todo' && (
                <p className="no-todo">No new todo's. Add a new task or complete a task that's in progress!</p>
              )}
              {filter === 'in-progress' && (
                <p className="no-todo">No todo's in progress. Let's get productive!</p>
              )}
              {filter === 'completed' && (
                <p className="no-todo">No todo's completed. Let's complete some!</p>
              )}
            </>) : (
            <TodoList
              filteredTodos={filteredTodos}
              todos={todos}
              setTodos={setTodos}
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default App;
