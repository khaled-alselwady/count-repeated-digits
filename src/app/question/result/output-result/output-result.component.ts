import { Component, input, Input, OnChanges, signal } from '@angular/core';

@Component({
  selector: 'app-output-result',
  standalone: true,
  imports: [],
  templateUrl: './output-result.component.html',
  styleUrl: './output-result.component.css',
})
export class OutputResultComponent implements OnChanges {
  isCorrectAnswer = input.required<boolean>();
  result = signal<{
    icon: string;
    message: string;
  }>({ icon: '', message: '' });

  ngOnChanges() {
    this.result.set(
      this.isCorrectAnswer()
        ? { icon: 'icons/correct.png', message: 'Correct!' }
        : { icon: 'icons/wrong.png', message: 'Wrong!' }
    );
  }
}
