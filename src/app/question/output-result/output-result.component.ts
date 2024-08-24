import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-output-result',
  standalone: true,
  imports: [],
  templateUrl: './output-result.component.html',
  styleUrl: './output-result.component.css',
})
export class OutputResultComponent implements OnChanges {
  @Input({ required: true }) isCorrectAnswer: boolean | undefined = undefined;
  result?: {
    icon: string;
    message: string;
  };

  ngOnChanges() {
    this.result = this.isCorrectAnswer
      ? { icon: 'icons/correct.png', message: 'Correct!' }
      : { icon: 'icons/wrong.png', message: 'Wrong!' };
  }
}
