import './assets/main.css';
import addProj from './projectObj';

//selectors
const projectAddBtn = document.getElementById('projectAddBtn');
const projectSubmit = document.getElementById('submit');
const projectTitle = document.getElementById('title');
const projectBack = document.getElementById('remove');
const modal = document.getElementById('modal');

projectAddBtn.addEventListener('click', () => {
  modal.showModal();
});
projectBack.addEventListener('click', () => {
  modal.close();
});

projectSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const me = addProj(projectTitle.value);
  me.addToList();
  me.removeFromList();
  modal.close();
});
