import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const oldarray = [...tasks];
    oldarray.splice(index, 1);
    setTasks(oldarray);
  };

  return (
    <div className="app">
      <h1 className={styles.title}>ToDoList app</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={input}
          type="text"
          placeholder="Write your task.."
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.addtask} onClick={addTask}>
          Add Task
        </button>
      </form>
      <h2 className={styles.yourtask}>Your Tasks :</h2>
      {tasks.map((med, index) => (
        <div className={styles.tasks}>
          <input className={styles.task} type="text" value={med} readOnly />
          <input
            type="button"
            value="Delete"
            className={styles.delete}
            onClick={() => {
              deleteTask(index);
            }}
          />
        </div>
      ))}
    </div>
  );
}
export default App;
