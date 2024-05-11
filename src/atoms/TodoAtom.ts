import { Todo } from '@/types';
import { atomWithStorage } from 'jotai/utils';


export const todoAtom = atomWithStorage<Todo[]>('tasks', []);