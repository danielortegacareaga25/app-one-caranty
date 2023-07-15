import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState, nameStateModuleTasks } from '../reducers/task.reducer';

export const selectTasksState =
  createFeatureSelector<TaskState>(nameStateModuleTasks);

export const selectTareas = createSelector(
  selectTasksState,
  (state: TaskState) => state.tasks
);
