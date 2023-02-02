import { randomId } from '../utils/randomId';
import { Items } from './model';

export const initTodos: Items = [
  {
    id: randomId(),
    title: 'First Item #1',
    date: new Date('2022-10-11'),
    desc: 'First Item Description',
    done: false
  },
  {
    id: randomId(),
    title: 'Second Item #2',
    date: new Date('2022-12-09'),
    desc: 'Second Item Description',
    done: false
  },
  {
    id: randomId(),
    title: 'Third Item #3',
    date: new Date('2023-01-20'),
    desc: 'Third Item Description',
    done: false
  },
  {
    id: randomId(),
    title: 'Done Item',
    date: new Date('2023-01-16'),
    desc: 'Done Item Description',
    done: true
  }
];
