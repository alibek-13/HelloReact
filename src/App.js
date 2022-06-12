import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [task, setTask] = useState([]);

  const result = task.map((element, index) => {
    return <p key={index}>{element}</p>;
  });

  const remove = (index) => {
    setTask([...task.filter((obj) => obj.id != index)]);
  };

  const inputValue = (e) => {
    setName(e.target.value);
  };

  const addTask = () => {
    setTask([...task, name]);
    setName("");
  };
  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={inputValue} />
      </label>
      <button onClick={addTask}> addTask</button>
      <div>
        {result}
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
}

export default App;
