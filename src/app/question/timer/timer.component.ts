import { Component, input, signal } from '@angular/core';
import { DifficultyOptions } from '../question.model';
import { TimerPipe } from "./timer.pipe";

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [TimerPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  difficultyOption = input.required<DifficultyOptions>();
  timer = signal<{ minutes: number; seconds: number }>({
    minutes: 0,
    seconds: 15,
  });
}
