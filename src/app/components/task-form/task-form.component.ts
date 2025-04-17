import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title = '';
  description = '';
  deadline = '';

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (this.title.trim() && this.deadline) {
      this.taskService.addTask(this.title, this.description, this.deadline);
      this.title = '';
      this.description = '';
      this.deadline = '';
    }
  }
}
