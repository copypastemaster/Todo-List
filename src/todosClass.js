export default class TodoProjects {
  constructor(title_s) {
    this.title_s = title_s;
  }
}

export class TodoItems extends TodoProjects {
  constructor(title_s) {
    super(title_s);
  }
}
