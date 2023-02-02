import { makeAutoObservable } from "mobx";
import { randomId } from "../utils/randomId";
import { initTodos } from "./mock";
import { Items } from "./model";

class TodoStore {
  list: Items = [];

  constructor(){
    makeAutoObservable(this);
    
    this.list = initTodos;
  }

  create = (value: string) => {
    this.list.push({
      id: randomId(),
      title: value,
      done: false
    })
  }

  completedList = () => {
    const list = this.list.filter(item => item.done)

    return {
      list,
      count: list.length
    }
  }

  unCompletedList = () => {
    const list = this.list.filter(item => !item.done)

    return {
      list,
      count: list.length
    };
  }
}

const todoStore = new TodoStore();

export default todoStore;
