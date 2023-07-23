import tasks from './tasks.js';
import removeTask from './removeTask.js';
import editTask from './editTask.js';

// Display task using DOM
function renderTask() {
  const taskContainer = document.querySelector('.list-container');
  taskContainer.innerHTML = '';

  tasks.forEach((task) => {
    const toDoList = document.createElement('div');
    toDoList.classList.add('item');
    toDoList.innerHTML = `
      <div class="label">
        <input type="checkbox" class="checkbox">
        <input type="text" name="name"" readonly value="${task.description}" class="text-center">
      </div>
      <i class="fa-solid fa-trash-can icon-3"></i>`;

    taskContainer.appendChild(toDoList);
  });

  // Attach event listeners to remove buttons
  const removeButtons = document.querySelectorAll('.icon-3');
  removeButtons.forEach((removeButton, index) => {
    removeButton.addEventListener('click', () => {
      removeTask(index);
      renderTask();
    });
  });

  editTask();
}

export default renderTask;