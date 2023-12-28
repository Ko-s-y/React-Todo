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

  return (
    <div className="App">
      <div>
        <h2>Todo</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={(event) => handleChange(event)} className='inputText' />
          <input type="submit" value='作成' className='submitButton' />
        </form>
      </div>
    </div>
  );
}

export default App;
