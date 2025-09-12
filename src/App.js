import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    const selectedTask = todos[index];
    setTask(selectedTask);
    handleDelete(index);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-img">
      <div className="card shadow-lg p-4 bg-transparent border border-dark">
        <h2 className="mb-4 text-center">Todo List</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            placeholder="Enter task"
            className="form-control bg-transparent border border-dark i-text fs-5"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-danger border-dark" onClick={handleAdd}>
            Add
          </button>
        </div>
        <ul className="list-group">
          {todos.map((t, index) => (
            <li
              key={index}
              className="shadow list-group-item d-flex justify-content-between mb-3 rounded bg-transparent border border-dark fs-5"
            >
              {t}
              <div className="d-flex gap-1">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
