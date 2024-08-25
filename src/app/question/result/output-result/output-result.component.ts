import { Component, input, OnChanges, signal } from '@angular/core';

@Component({
  selector: 'app-output-result',
  standalone: true,
  imports: [],
  templateUrl: './output-result.component.html',
  styleUrl: './output-result.component.css',
})
export class OutputResultComponent implements OnChanges {
  isCorrectAnswer = input.required<boolean>();
  isTimeout = input.required<boolean>();
  result = signal<{
    icon: string;
    message: string;
  }>({ icon: '', message: '' });

  ngOnChanges() {
    this.result.update(() => {
      if (this.isTimeout()) {
        return { icon: 'icons/time-out.png', message: 'Time out!' };
      }
      return this.isCorrectAnswer()
        ? { icon: 'icons/correct.png', message: 'Correct!' }
        : { icon: 'icons/wrong.png', message: 'Wrong!' };
    });
  }
}
