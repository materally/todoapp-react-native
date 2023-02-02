export interface Item {
  id: string;
  title: string;
  done: boolean;
}

export type Items = Array<Item>;
