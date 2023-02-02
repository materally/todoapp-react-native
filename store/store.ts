import { makeAutoObservable } from "mobx";
import { randomId } from "../utils/randomId";
import { initTodos } from "./mock";
import { Item, Items } from "./model";

class TodoStore {
  list: Items = [];
  showModal: boolean = false;
  editItem: Item | undefined = undefined;

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

  edit = (item: Item) => {
    const index = this.list.findIndex(editItem => editItem.id === item.id);
    this.list[index] = item;
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

  setShowModal = () => this.showModal = !this.showModal
  
  setEditItem = (item: Item | undefined) => this.editItem = item;
}

const todoStore = new TodoStore();

export default todoStore;
