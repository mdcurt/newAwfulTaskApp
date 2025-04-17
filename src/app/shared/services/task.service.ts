import { Injectable, signal, Signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = signal<Task[]>([]);
  private nextId = 1;

  /** Read‑only access to tasks */
  get Tasks(): Signal<Task[]> {
    return this.tasks.asReadonly();
  }

  addTask(title: string, description: string, deadline: string): void {
    this.tasks.update(list => [
      ...list,
      { id: this.nextId++, title, description, deadline, completed: false }
    ]);
  }

  deleteTask(id: number): void {
    this.tasks.update(list => list.filter(t => t.id !== id));
  }

  toggleComplete(id: number): void {
    this.tasks.update(list =>
      list.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
}
