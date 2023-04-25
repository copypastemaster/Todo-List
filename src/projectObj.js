import addTodo from './todoObject';

const addProj = (title) => {
  const container = document.querySelector('#projects');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.style = 'display: flex; justify-content: space-between';
  const editRemoveContainer = document.createElement('div');
  editRemoveContainer.style = 'display: flex;';
  const span = document.createElement('span');
  span.classList.add('todo-text');
  const remove = document.createElement('button');
  remove.textContent = 'x';
  const editButton = document.createElement('button');
  editButton.textContent = 'edit';

  return {
    title,
    addToList() {
      span.innerHTML = `${title}`;
      editRemoveContainer.appendChild(editButton);
      editRemoveContainer.appendChild(remove);
      li.appendChild(span);
      li.appendChild(editRemoveContainer);
      ul.appendChild(li);
      container.appendChild(ul);
    },
    removeFromList() {
      remove.addEventListener('click', () => {
        container.removeChild(ul);
      });
    },

    editList() {
      const saveButton = document.createElement('input');
      saveButton.type = 'button';
      saveButton.value = 'save';

      editButton.addEventListener('click', () => {
        span.contentEditable = true;
        span.focus();
        editButton.replaceWith(saveButton);
      });

      saveButton.addEventListener('click', () => {
        saveButton.replaceWith(editButton);
        span.contentEditable = false;
        console.log(span);
      });
    },

    viewList() {
      const getProject = document.querySelector('.project-list');
      const getTodo = document.getElementById('show-todo');
      const back = document.getElementById('back');
      const header = document.getElementById('todoHeading');

      //todo selectors
      const todoAddBtn = document.getElementById('todoAdd');
      const todoSubmit = document.getElementById('todoSubmit');
      const todoTitle = document.getElementById('todoTitle');
      const todoBack = document.getElementById('todoRemove');
      const todoModal = document.getElementById('todoModal');

      span.addEventListener('click', () => {
        getProject.replaceWith(getTodo);
        getTodo.hidden = false;
        header.innerHTML = `Todos of ${span.textContent}`;

        todoAddBtn.addEventListener('click', () => {
          todoModal.show();
        });

        todoSubmit.addEventListener('click', (e) => {
          e.preventDefault();

          const todo = addTodo(todoTitle.value);
          todo.addToList();
          todo.removeFromList();
          todoModal.close();
        });
      });

      back.addEventListener('click', () => {
        getTodo.replaceWith(getProject);
      });
    },
  };
};
export default addProj;
