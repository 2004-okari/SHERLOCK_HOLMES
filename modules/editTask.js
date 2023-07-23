import tasks from './tasks.js';

// Edit task function with modifications
function editTask() {
  // Attach event listeners to text inputs for editing
  const textCenterInputs = document.querySelectorAll('.text-center');
  textCenterInputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      // eslint-disable-next-line prefer-destructuring
      const index = event.target.closest('.item').dataset.index;
      tasks[index].description = event.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    input.addEventListener('click', () => {
      if (input.hasAttribute('readonly')) {
        input.removeAttribute('readonly');
      } else {
        input.setAttribute('readonly', 'true');
      }
    });
  });
}

export default editTask;