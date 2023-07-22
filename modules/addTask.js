import tasks from './tasks.js';

// Add Task to local storage
function addTask(newInput) {
  if (newInput) {
    const newIndex = tasks.length + 1;
    tasks.push({
      description: newInput,
      completed: false,
      index: newIndex,
    });
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default addTask;