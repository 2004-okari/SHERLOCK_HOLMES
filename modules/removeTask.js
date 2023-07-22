import tasks from './tasks.js';

// Remove task function
function removeTask(index) {
  tasks.splice(index, 1);

  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default removeTask;