import TodoProjects from './todosClass';
import { todoHeader } from './todos';

const project = document.getElementById('project');
const projectTitle = document.getElementById('projectTitle');
const projectSubmit = document.getElementById('projectSubmit');
const projectBack = document.getElementById('projectBack');

//Global selectors
const ul = document.getElementById('ulCont');
const header = document.getElementById('heading');
const backBtn = document.getElementById('backBtn');

//project

const todoItem = new TodoProjects();
const getDetails = (e) => {
  e.preventDefault();

  todoItem.title_s = projectTitle.value;
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

  span.addEventListener('click', () => {
    todoHeader.innerHTML = `Todos of ${todoItem.title_s}`;
  });
  return ul, span;
};

//Project listenerse
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  project.style = 'visibility: visible;';
});

projectBack.addEventListener('click', () => {
  project.style = 'visibility: hidden;';
});

projectSubmit.addEventListener('click', getDetails);

export { getDetails, projectSubmit, projectBack, addBtn, todoItem };
