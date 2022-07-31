import { TaskModel } from "./task.model.mjs";

export class ColumnsForBoard {
  #id;
  #createdAt;
  #updatedAt;
  tasks;

  constructor(object) {
    this.#id = object.id;
    this.#createdAt = object.createdAt;
    this.#updatedAt = object.updatedAt;
  }

  setTasks(tasks){

    this.tasks = tasks.map((task) => new TaskModel(task));
  }

  get Id() {
    return this.#id;
  }

  get CreatedAt() {
    return this.#createdAt;
  }

  get UpdatedAt() {
    return this.#updatedAt;
  }

  get Tasks(){
    return this.tasks;
  }

}