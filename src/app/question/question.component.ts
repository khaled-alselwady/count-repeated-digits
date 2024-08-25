import { Component, OnInit, signal } from '@angular/core';

import { DifficultyOptions } from './question.model';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { OutputResultComponent } from './result/output-result/output-result.component';
import { InputResultComponent } from './result/input-result/input-result.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    RandomNumbersComponent,
    InputResultComponent,
    OutputResultComponent,
    TimerComponent,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  randomDigit = signal(0);
  selectedDifficulty = signal<DifficultyOptions>(DifficultyOptions.EASY);
  isCorrectAnswer = signal(false);
  isOutputVisible = signal(false);
  isTimeout = signal(false);

  getSelectedDifficultyMode(filter: string) {
    switch (filter) {
      case 'medium':
        return DifficultyOptions.MEDIUM;
      case 'hard':
        return DifficultyOptions.HARD;
      default:
        return DifficultyOptions.EASY;
    }
  }

  ngOnInit() {
    this.randomDigit.set(Math.floor(Math.random() * 10));
  }

  onCheckAnswer(isCorrect: boolean) {
    this.isCorrectAnswer.set(isCorrect);
    this.isOutputVisible.set(true);
  }

  onSelectedDifficulty(filter: string) {
    this.isOutputVisible.set(false);
    this.selectedDifficulty.set(this.getSelectedDifficultyMode(filter));
    this.randomDigit.set(Math.floor(Math.random() * 10));
  }

  onTimeout(isTimeout: boolean) {
    this.isTimeout.set(isTimeout);
    this.isOutputVisible.set(true);
  }
}
