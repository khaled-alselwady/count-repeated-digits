import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';

import { NgFor } from '@angular/common';
import { DifficultyOptions } from '../question.model';
import { RandomNumbersService } from './random-numbers.service';

@Component({
  selector: 'app-random-numbers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './random-numbers.component.html',
  styleUrl: './random-numbers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomNumbersComponent {
  @Input({ required: true }) difficultyMode: DifficultyOptions =
    DifficultyOptions.EASY;

  private randomNumbersService = inject(RandomNumbersService);

  get randomNumbers() {
    return this.randomNumbersService.getAllRandomNumbers(this.difficultyMode);
  }

  getValueOfDifficultyMode(difficultyMode: 'EASY' | 'MEDIUM' | 'HARD') {
    switch (difficultyMode) {
      case 'MEDIUM':
        return DifficultyOptions.MEDIUM;
      case 'HARD':
        return DifficultyOptions.HARD;
      default:
        return DifficultyOptions.EASY;
    }
  }
}
