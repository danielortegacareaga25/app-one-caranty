import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from 'src/app/component/task-modal/task-modal.component';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TaskFacade } from 'src/app/store/facades/task.facade';
import { Observable } from 'rxjs';
import { UserFacade } from 'src/app/store/facades/user.facade';
@Component({
  selector: 'task-page',
  templateUrl: 'task-page.component.html',
  styleUrls: ['task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    public dialog: MatDialog,
    private _taskFacade: TaskFacade,
    private _userFacade: UserFacade
  ) {}

  getTasks$ = this._taskFacade.tasks$;

  ngOnInit() {}

  openTaskModal(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._taskFacade.addTask(result);
      }
    });
  }

  exit(): void {
    this._userFacade.logout();
  }
}
