import { Component, effect, input, OnChanges, output } from '@angular/core';
import { DifficultyOptions } from '../question.model';
import { TimerPipe } from './timer.pipe';
import { Timer, TimerOptions } from './timer.model';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [TimerPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnChanges {
  difficultyOption = input.required<DifficultyOptions>();
  isCorrectAnswer = input.required<boolean>();
  timer: Timer = {
    minutes: 0,
    seconds: 15,
  };
  timeout = output<boolean>();
  interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      this.startTimer();
      switch (this.difficultyOption()) {
        case DifficultyOptions.EASY:
          this.timer = this.convertFromSecondsToTimerObject(TimerOptions.EASY);
          break;
        case DifficultyOptions.MEDIUM:
          this.timer = this.convertFromSecondsToTimerObject(
            TimerOptions.MEDIUM
          );
          break;
        case DifficultyOptions.HARD:
          this.timer = this.convertFromSecondsToTimerObject(TimerOptions.HARD);
          break;
      }
    });
  }
  ngOnChanges() {
    if (this.isCorrectAnswer()) {
      this.stopTimer();
    }
  }

  private convertFromSecondsToTimerObject(seconds: number): Timer {
    const minutes = seconds / 60;
    if (seconds % 60 === 0) {
      return { minutes: minutes, seconds: 0 };
    }
    return {
      minutes: Math.floor(minutes),
      seconds: seconds % 60,
    };
  }

  private startTimer() {
    this.stopTimer();
    this.interval = setInterval(() => {
      if (this.timer.seconds === 0) {
        if (this.timer.minutes === 0) {
          this.stopTimer();
          this.timeout.emit(true);
        } else {
          this.timer.minutes--;
          this.timer.seconds = 59;
        }
      } else {
        this.timer.seconds--;
      }
    }, 1000);
  }

  private stopTimer() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
