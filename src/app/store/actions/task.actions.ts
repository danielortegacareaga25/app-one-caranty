import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task.interface';

export const addTarea = createAction(
  '[Tareas] Agregar Tarea',
  props<{ task: Task }>()
);

export const updateTarea = createAction(
  '[Tareas] Actualizar Tarea',
  props<{ task: Task }>()
);

export const deleteTarea = createAction(
  '[Tareas] Eliminar Tarea',
  props<{ id: number }>()
);
