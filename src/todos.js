import { TodoItems } from './todosClass';
import { todoItem } from './project';

const todoHeader = document.getElementById('todoHeader');
const addBtn = document.getElementById('todoAdd');
const todoUl = document.getElementById('todoUL');

const todoProject = document.getElementById('todoProject');
const todoBack = document.getElementById('todoBack');
const todoTitle = document.getElementById('todoTitle');
const todoSubmit = document.getElementById('todoSubmit');

const items = new TodoItems();

const addTodo = (e) => {
  e.preventDefault();

  items.title_s = todoTitle.value;
  const li = document.createElement('li');
  const label = document.createElement('label');
  const span = document.createElement('span');
  span.classList.add('todo-text');

  span.innerHTML = items.title_s;
  label.appendChild(span);
  li.appendChild(label);
  todoUl.appendChild(li);

  todoProject.style = 'visibility: hidden';
  todoTitle.value = '';

  return todoUl;
};

//todo listeners
addBtn.addEventListener('click', () => {
  todoProject.style = 'visibility: visible;';
});

todoBack.addEventListener('click', () => {
  todoProject.style = 'visibility: hidden;';
});

todoSubmit.addEventListener('click', addTodo);

export { todoHeader };
