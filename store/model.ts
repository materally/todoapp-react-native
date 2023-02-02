export interface Item {
  id: string;
  title: string;
  desc?: string;
  date: Date;
  done: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

export type Items = Array<Item>;
