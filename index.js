import addTask from './modules/addTask.js';
import renderTask from './modules/displayTask.js';

// Add Tast implementation
const addTaskButton = document.querySelector('.add-btn');
addTaskButton.addEventListener('click', () => {
  const newInput = document.querySelector('.task-input').value;
  addTask(newInput);
  renderTask();
});

renderTask();