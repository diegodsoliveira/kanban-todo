import { Component, Input } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() task!: ITask;

  logClick(event: any) {
    console.log(event);
  }
}
