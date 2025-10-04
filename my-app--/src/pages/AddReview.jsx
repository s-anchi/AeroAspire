import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddTask = ({ setTasks }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return alert("Please enter a task");
    const newTask = { text, completed: false, date: new Date().toLocaleString() };
    setTasks(prev => [...prev, newTask]);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-700 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Enter task" 
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Task
        </button>
      </form>
    </div>
  );
};
