import { randomId } from '../utils/randomId';
import { Items } from './model';

export const initTodos: Items = [
  {
    id: randomId(),
    title: 'First Item #1',
    done: false
  },
  {
    id: randomId(),
    title: 'Second Item #2',
    done: false
  },
  {
    id: randomId(),
    title: 'Third Item #3',
    done: false
  }
];
