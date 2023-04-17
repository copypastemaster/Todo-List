class Todos {
  constructor(title, description, read, add, deletes) {
    this.title = title;
    this.description = description;
    this.read = read;
    this.add = add;
    this.deletes = deletes;
  }
}

class Urgent extends Todos {
  constructor(title, description, dueDate, read) {
    super(title, description, dueDate);
    this.read = read;
  }
}
