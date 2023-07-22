import addTask from './addTask.js';
// Import the functions to be testedimport { addTask } from './index.js';

describe('should add tasks', () => {
  beforeEach(() => {
    // Create a fake DOM environment
    document.body.innerHTML = `
      <div>
        <input type="text" class="task-input">
        <button class="add-button">Add Task</button>
      </div>
    `;
  });

  test('should add tasks to the list', () => {
    const newValue = 'Task 001';

    // Set the input value
    const taskInput = document.querySelector('.task-input');
    taskInput.value = newValue;

    // Trigger the addTask function (assuming it adds the task from the input value)
    addTask(taskInput.value);

    // Retrieve tasks from localStorage and parse the JSON data
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe(newValue);
  });
});
