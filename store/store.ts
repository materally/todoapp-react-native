import { makeAutoObservable } from "mobx";
import { randomId } from "../utils/randomId";
import { initTodos } from "./mock";
import { Items } from "./model";

class TodoStore {
  list: Items = [];
  showModal: boolean = false;

  constructor(){
    makeAutoObservable(this);
    
    this.list = initTodos;
  }

  create = (title: string, desc: string, date: Date) => {
    this.list.push({
      id: randomId(),
      title,
      desc,
      date,
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

  setShowModal = () => {
    return this.showModal = !this.showModal
  }
}

const todoStore = new TodoStore();

export default todoStore;
