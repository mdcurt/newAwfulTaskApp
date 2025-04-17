
import { Component } from '@angular/core';
import { Signal } from '@angular/core';
import { TaskService, Task } from '../../shared/services/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskFormComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  //signal of current tasks
  get tasks(): Signal<Task[]> {
    return this.taskService.Tasks;
  }
}
