import React from "react";

export const About = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">About Task Manager</h2>
      <p>
        Task Manager is a simple app to organize your daily work.  
        Add tasks, mark them complete, or delete when done.  
        Your tasks are saved in your browser (localStorage).
      </p>
    </div>
  );
};
