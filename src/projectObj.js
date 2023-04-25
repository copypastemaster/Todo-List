import { modal, projectSubmit } from './index';

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
      let str;

      editButton.addEventListener('click', () => {
        span.contentEditable = true;
        str = span;
        span.focus();
        editButton.replaceWith(saveButton);
      });

      saveButton.addEventListener('click', () => {
        saveButton.replaceWith(editButton);
        span.contentEditable = false;
      });
    },
  };
};
export default addProj;
