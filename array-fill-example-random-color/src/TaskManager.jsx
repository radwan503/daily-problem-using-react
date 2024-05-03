import React, { useState } from 'react';

const TaskManager = () => {
  // State for managing task statuses
  const [taskStatuses, setTaskStatuses] = useState(
    new Array(5).fill('Pending')
  );

  // Function to reset task statuses
  const resetTaskStatuses = () => {
    setTaskStatuses(new Array(5).fill('Complete'));
  };

  // Function to update task status
  const updateTaskStatus = (index, newStatus) => {
    const updatedStatuses = [...taskStatuses];
    updatedStatuses[index] = newStatus;
    setTaskStatuses(updatedStatuses);
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <button onClick={resetTaskStatuses}>Reset Tasks</button>
      <ul>
        {taskStatuses.map((status, index) => (
          <li key={index}>
            Task {index + 1}:
            <input
              type="text"
              value={status}
              onChange={(e) => updateTaskStatus(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <button onClick={resetTaskStatuses}>Update</button>
    </div>
  );
};

export default TaskManager;
