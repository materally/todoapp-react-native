export interface Item {
  id: string;
  title: string;
  desc?: string;
  date: Date;
  done: boolean;
}

export type Items = Array<Item>;
