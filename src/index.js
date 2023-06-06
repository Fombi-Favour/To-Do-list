import './style.css';

const todoData = [
  {
    index: 1,
    description: 'Learn JavaScript',
    completed: false,
  },
  {
    index: 2,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 3,
    description: 'complete To Do list project',
    completed: false,
  },
  {
    index: 4,
    description: 'Manage all your lists in one place',
    completed: false,
  },
];

const todoList = document.querySelector('.task-list');

todoData.forEach((data) => {
  todoList.innerHTML += `
  <div class="task" draggable="true">
    <div class="update">
      <input type="checkbox" id="complete" />
      <p>${data.description}</p>
    </div>
    <div class="icons">
      <i class="las la-ellipsis-v" id="move"></i>
      <i class="las la-trash-alt" id="delete"></i>
    </div>
  </div>
  `;
});