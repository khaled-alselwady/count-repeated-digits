import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DifficultyOptions } from './question.model';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [RandomNumbersComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  randomDigit = 0;

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
    this.randomDigit = Math.floor(Math.random() * 10);
  }

  onChangeDifficultyOptions(filter: string) {
    // this.change.emit(this.getSelectedDifficultyMode(filter));
  }
}
