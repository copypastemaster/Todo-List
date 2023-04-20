export default class TodoProjects {
  constructor(title_s) {
    this.title_s = title_s;
  }
}

class TodoItems {
  constructor(todo, dueDate, remove) {
    this.todo = todo;
    this.dueDate = dueDate;
    this.remove = remove;
  }
}
