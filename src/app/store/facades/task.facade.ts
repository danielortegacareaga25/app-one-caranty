import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as TaskActions from './../actions/task.actions';
import { Task } from 'src/app/interfaces/task.interface';
import { selectTareas } from '../selectors/task.selector';

@Injectable({
  providedIn: 'root',
})
export class TaskFacade {
  tasks$: Observable<Task[]>;
  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectTareas);
  }

  addTask(task: Task) {
    this.store.dispatch(TaskActions.addTarea({ task }));
  }

  updateTask(task: Task) {
    this.store.dispatch(TaskActions.updateTarea({ task }));
  }

  deleteTask(id: number) {
    this.store.dispatch(TaskActions.deleteTarea({ id }));
  }
}
