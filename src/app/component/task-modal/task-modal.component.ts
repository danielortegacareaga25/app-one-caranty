import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'task-modal',
  templateUrl: 'task-modal.component.html',
  styleUrls: ['task-modal.component.scss'],
})
export class TaskModalComponent {
  taskName: string = '';

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveTask(): void {
    const newTask: Task = {
      id: Date.now(),
      title: this.taskName,
      completed: false,
    };
    this.dialogRef.close(newTask);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
