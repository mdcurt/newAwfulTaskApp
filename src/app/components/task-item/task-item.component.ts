import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { Task, TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;

  // — make it 'private' so Angular can inject it —
  constructor(private svc: TaskService) {}

  toggle(): void {
    this.svc.toggleComplete(this.task.id);
  }

  delete(): void {
    this.svc.deleteTask(this.task.id);
  }
}
