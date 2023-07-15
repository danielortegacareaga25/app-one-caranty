import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    const newTask = {
      name: this.taskName,
    };
    this.dialogRef.close(newTask);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
