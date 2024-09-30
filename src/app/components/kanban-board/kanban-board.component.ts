import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TaskList } from './../../types/task-list';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent {
  todo: TaskList = [
    { title: 'Limpar casa' },
    { title: 'Codar' },
    { title: 'Lavar carro' },
  ];

  inProgress: TaskList = [{ title: 'Task 4' }];

  done: TaskList = [{ title: 'Task 5' }];

  drop(event: CdkDragDrop<TaskList>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  logClick(event: MouseEvent) {
    console.log(event);
  }
}
