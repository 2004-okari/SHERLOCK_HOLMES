import removeTask from './removeTask.js';
import addTask from './addTask.js';

describe('Ensure that removeTask function is working', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('Remove task form list', () => {
    addTask('task-1');

    removeTask(0);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    expect(tasks.length).toBe(0);
  });
});