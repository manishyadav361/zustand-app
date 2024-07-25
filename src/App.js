import { useState } from 'react';
import './App.css';
import useTodoStore from './stores/todos';

function App() {

  const {count, todos, addTodo, removeTodo} = useTodoStore()

  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleAddTodo() {
    addTodo(inputValue)
  }

  function handleRemoveTodo(index) {
    removeTodo(index)
  }

  return (
    <div>
      <input type="text" onChange={handleInputChange} /><button onClick={handleAddTodo}>Add</button>
  
      <p>Todos: {count}</p>
      {
        todos.map((todo, index) => (
          <div key={index}>{todo} <button onClick={() => handleRemoveTodo(index)}>Remove</button></div>
        ))
      }
    </div>
  );
}

export default App;
