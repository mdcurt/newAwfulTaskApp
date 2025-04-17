import { Component, effect, signal, Signal } from '@angular/core';
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

  generateRandomNumber() {
    return Math.random();
  }
  readonly confettiSlots = Array.from({ length: 30 }, (_, i) => i);

  get tasks(): Signal<Task[]> {
    return this.taskService.Tasks;
  }

  /** controls whether THANK YOU is visible */
  private showThankYouSignal = signal(false);
  readonly showThankYou = this.showThankYouSignal.asReadonly();

  constructor(private taskService: TaskService) {
    // watch for first‑task addition
    effect(() => {
      const length = this.tasks().length;
      if (length === 1) {
        this.showThankYouSignal.set(true);
        // hide after 1.5s
        setTimeout(() => this.showThankYouSignal.set(false), 1500);
      }

    });
  }
}
