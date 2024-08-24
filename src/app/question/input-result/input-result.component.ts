import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RandomNumbersService } from '../random-numbers/random-numbers.service';

@Component({
  selector: 'app-input-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-result.component.html',
  styleUrl: './input-result.component.css',
})
export class InputResultComponent {
  @Input({ required: true }) randomDigit = 0;
  private randomNumbersService = inject(RandomNumbersService);
  inputValue = '';
  isCorrectAnswer = false;

  onSubmit() {
    this.isCorrectAnswer =
      this.randomNumbersService.countNumber(this.randomDigit) ===
      parseFloat(this.inputValue);
  }

  onReset() {
    window.location.reload();
  }
}
