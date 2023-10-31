import Dexie from "dexie";

export class Database extends Dexie {
  constructor() {
    super("database");

    this.version(1).stores({
      todos: "++id,done",
    });

    this.todos = this.table("todos");
  }

  async getTodos(order) {
    let todos = [];
    switch (order) {
      case forwardOrder:
        todos = await this.todos.orderBy("id").toArray();
        break;
      case reverseOrder:
        todos = await this.todos.orderBy("id").reverse().toArray();
        break;
      case unfinishedFirstOrder:
        todos = await this.todos.where("done").equals(0).toArray();
        break;
      default:
        todos = await this.todos.orderBy("id").toArray();
    }

    return todos.map((t) => {
      t.done = !!t.done;
      return t;
    });
  }

  setTodoDone(id, done) {
    return this.todos.update(id, { done: done ? 1 : 0 });
  }

  addTodo(text) {
    return this.todos.add({ text, done: 0 });
  }

  deleteTodo(todoId) {
    return this.todos.delete(todoId);
  }
}

export const forwardOrder = "forward";

export const reverseOrder = "reverse";

export const unfinishedFirstOrder = "unfinished";
