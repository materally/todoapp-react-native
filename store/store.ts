import { randomId } from "../utils/randomId";
import { initTodos } from "./mock";
import { Items } from "./model";

class TodoStore {
  list: Items = [];

  constructor(){
    this.list = initTodos;
  }

  create = (value: string) => {
    this.list.push({
      id: randomId(),
      title: value,
      done: false
    })
  }

  countCompleted = () => {
    return this.list.filter(item => item.done).length;
  }

  countUnCompleted = () => {
    return this.list.filter(item => !item.done).length;
  }

}

const todoStore = new TodoStore();

export default todoStore;