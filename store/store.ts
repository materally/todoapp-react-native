import { makeAutoObservable } from "mobx";
import { randomId } from "../utils/randomId";
import { initItems } from "./mock";
import { Item, Items } from "./model";

class TodoStore {
  items: Items = [];
  showModal: boolean = false;
  editItem: Item | undefined = undefined;

  constructor(){
    makeAutoObservable(this);
    
    this.items = initItems;
  }

  create = (title: string, desc: string, date: Date) => {
    this.items.push({
      id: randomId(),
      title,
      desc,
      date,
      done: false
    })
  }

  update = (item: Item) => {
    const index = this.items.findIndex(editItem => editItem.id === item.id);
    this.items[index] = item;
  }

  completedItems = () => {
    const items = this.items.filter(item => item.done)

    return {
      items,
      count: items.length
    }
  }

  unCompletedItems = () => {
    const items = this.items.filter(item => !item.done)

    return {
      items,
      count: items.length
    };
  }

  setShowModal = () => this.showModal = !this.showModal
  
  setEditItem = (item: Item | undefined) => this.editItem = item;

  setItemStatus = (id: string) => {
    const index = this.items.findIndex(item => item.id === id);
    this.items[index].done = !this.items[index].done;
  }
}

const todoStore = new TodoStore();

export default todoStore;
