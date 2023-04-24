const addProj = (title) => {
  const container = document.querySelector('#projects');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.style = 'display: flex; justify-content: space-between;';
  // const label = document.createElement('label');
  const span = document.createElement('span');
  span.classList.add('todo-text');
  const remove = document.createElement('button');
  remove.textContent = 'x';

  return {
    title,
    addToList() {
      span.innerHTML = `${title}`;
      li.appendChild(span);
      li.appendChild(remove);
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
export default addProj;
