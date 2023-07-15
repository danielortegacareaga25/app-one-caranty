import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from 'src/app/component/task-modal/task-modal.component';

@Component({
  selector: 'task-page',
  templateUrl: 'task-page.component.html',
  styleUrls: ['task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Tarea 1',
      completed: false,
    },
  ];
  displayedColumns: string[] = ['id', 'titulo', 'actions'];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.openTaskModal();
  }

  checkboxClicked() {
    console.log('tasks', this.tasks);
  }

  openTaskModal(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: { tasks: this.tasks },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tasks.push(result);
      }
    });
  }
}
