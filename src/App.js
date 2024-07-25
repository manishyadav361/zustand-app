import { useState } from 'react';
import './App.css';
import useTodoStore, { TODO_ACTION } from './stores/todos';

function App() {

  const {count, todos, dispatch} = useTodoStore()

  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleAddTodo() {
    dispatch({type: TODO_ACTION.ADD_TODO , payload: inputValue});
  }

  function handleRemoveTodo(index) {
    dispatch({type: TODO_ACTION.REMOVE_TODO, payload: index})
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
