import './assets/main.css';
import { add, addDays } from 'date-fns';
import TodoProjects from './todosClass';

const date = new Date();
const tomorrow = addDays(date, 2);

//Project selectors

const container = document.getElementById('container');
const project = document.getElementById('project');
const projectTitle = document.getElementById('projectTitle');
const projectSubmit = document.getElementById('projectSubmit');
const projectBack = document.getElementById('projectBack');

//Global selectors
const ul = document.getElementById('ulCont');
const header = document.getElementById('heading');
const backBtn = document.getElementById('backBtn');

ul.addEventListener('click', (e) => {
  e.preventDefault();
  // backBtn.style = 'visiblity: hidden;';
  header.textContent = 'Todos';
});
//project

const getDetails = (e) => {
  e.preventDefault();

  const todoItem = new TodoProjects(projectTitle.value);
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.type = 'checkbox';
  const span = document.createElement('span');
  span.classList.add('todo-text');

  span.innerHTML = todoItem.title_s;
  label.appendChild(span);
  li.appendChild(label);
  ul.appendChild(li);

  project.style = 'visibility: hidden;';
  projectTitle.value = '';
  return ul;
};

//Project listeners
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  project.style = 'visibility: visible;';
});

projectBack.addEventListener('click', () => {
  project.style = 'visibility: hidden;';
});

projectSubmit.addEventListener('click', getDetails);

//Todos selectors
const todo = document.getElementById('todo');
const modalTodo = document.getElementById('modalTodo');
const submitBtn = document.getElementById('submit');
const back = document.getElementById('back');
