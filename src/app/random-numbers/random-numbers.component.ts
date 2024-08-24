import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DifficultyOptions } from '../question/question.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-random-numbers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './random-numbers.component.html',
  styleUrl: './random-numbers.component.css',
})
export class RandomNumbersComponent {
  @Input({ required: true }) difficultyMode: DifficultyOptions =
    DifficultyOptions.EASY;

  randomNumbers: {
    number: number;
    backgroundColor: string;
  }[] = [];

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  get allRandomNumbers() {
    this.randomNumbers.length = 0;
    for (let i = 0; i < this.difficultyMode; i++) {
      this.randomNumbers.push({
        number: Math.floor(Math.random() * 10),
        backgroundColor: this.getRandomColor(),
      });
    }
    return this.randomNumbers;
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
