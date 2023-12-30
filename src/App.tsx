import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    })

    setTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    })

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>Todo</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type="text" onChange={(event) => handleChange(event)} className='inputText' />
          <input type="submit" value='作成' className='submitButton' />
        </form>
        <ul className='todoList'>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="text" onChange={(event) => handleEdit(todo.id, event.target.value)} className='inputText' value={todo.inputValue} disabled={todo.checked} />
              <input type="checkbox" onChange={(event) => handleChecked(todo.id, todo.checked)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
