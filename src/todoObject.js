const addTodo = (title, dueDate) => {
  const container = document.querySelector('#todoList');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.style = 'display: flex; justify-content: space-between';
  const due = document.createElement('date');
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
    dueDate,
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
  };
};

export default addTodo;
