import React from "react";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export const Home = ({ tasks, setTasks }) => {
  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task, idx) => (
            <div 
              key={idx} 
              className="flex justify-between items-center p-3 bg-white dark:bg-gray-700 rounded shadow"
            >
              <div>
                <p className={`font-medium ${task.completed ? "line-through text-gray-400" : ""}`}>
                  {task.text}
                </p>
                <p className="text-sm text-gray-500">{task.date}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleComplete(idx)}>
                  <CheckCircleIcon className={`h-6 w-6 ${task.completed ? "text-green-500" : "text-gray-400"}`} />
                </button>
                <button onClick={() => deleteTask(idx)}>
                  <TrashIcon className="h-6 w-6 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
