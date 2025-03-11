import React from 'react';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });

      if (response.ok) {
        fetchTasks(); 
      } else {
        console.error('Failed to delete the task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {tasks.map(task => (
        <div key={task._id} className="bg-white p-4 rounded shadow mb-2">
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <p>{task.description}</p>
          <button
            onClick={() => handleDelete(task._id)}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
