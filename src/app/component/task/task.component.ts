import { Task } from 'src/app/interfaces/task.interface';
import { Component, Input, OnInit } from '@angular/core';
import { TaskFacade } from 'src/app/store/facades/task.facade';

@Component({
  selector: 'task-item',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task | null = null;
  constructor(private _taskFacade: TaskFacade) {}

  ngOnInit() {}

  completeTask() {
    if (this.task) {
      this._taskFacade.updateTask({
        ...this.task,
        completed: !this.task.completed,
      });
    }
  }

  deleteTask() {
    this._taskFacade.deleteTask(this.task?.id || 0);
  }
}
