import TodoData from './modules/todoTask.js';
import Functionality from './modules/crudData.js';
import './style.css';

const crud = new Functionality();
const form = document.querySelector('#forms');

document.addEventListener('DOMContentLoaded', Functionality.showStorage);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = document.querySelector('#today-todo').value;
  const dataIndex = Functionality.localGetItem();
  let index;
  if (dataIndex.length > 0) {
    index = dataIndex[dataIndex.length - 1].index + 1;
  } else {
    index = 0;
  }
  const completed = false;

  if (content === '') {
    console.error('Fill info!!!');
  } else {
    const todo = new TodoData(index, content, completed);
    crud.addData(todo);
    crud.displayData(todo);
  }

  document.querySelector('#today-todo').value = '';
});
