import React, { useId, useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [task, setTask] = useState([]);
  const id = useId()


  const result = task.map((element) => {
    return <p key={id}>
      {element} 
    </p>
  })

  const inputValue = (e) => {
    setName(e.target.value)
  }

  const addTask = () => {
    setTask([
      ...task,
      name,
    ])
    setName('')
  }
  const remove = (index) => {
    setTask([
      ...task.filter(obj => obj.id !== index) ])
  }
  return (
    <div >
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={inputValue}
        />
      </label>
      <button onClick={addTask}> addTask</button>
      <div  className="result_task">
      {result}
      </div>
      <button onClick={remove}>Delete</button>
    </div>
  )
}

export default App;
