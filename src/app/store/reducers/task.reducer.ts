import { createReducer, on } from '@ngrx/store';
import * as taskActions from './../actions/task.actions';
import { Task } from 'src/app/interfaces/task.interface';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(taskActions.addTarea, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(taskActions.updateTarea, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
  })),
  on(taskActions.deleteTarea, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((t) => t.id !== id),
  }))
);

export const nameStateModuleTasks = 'tasksStoreModule';
