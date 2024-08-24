import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
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
  private randomNumbersService = inject(RandomNumbersService);
  difficultyMode = input.required<DifficultyOptions>();

  randomNumbers = computed(() => {
    return this.randomNumbersService.getAllRandomNumbers(this.difficultyMode());
  });

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
