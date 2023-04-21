import './assets/main.css';
import { add, addDays } from 'date-fns';
import TodoProjects from './todosClass';
import { addBtn, projectBack, projectSubmit, getDetails } from './project';
import { span } from './todos';

const date = new Date();
const tomorrow = addDays(date, 2);

//Project selectors

//Todos selectors
const todo = document.getElementById('todo');
const modalTodo = document.getElementById('modalTodo');
const submitBtn = document.getElementById('submit');
const back = document.getElementById('back');
