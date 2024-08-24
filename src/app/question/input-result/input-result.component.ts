import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
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
  private randomNumbersService = inject(RandomNumbersService);
  randomDigit = input.required<number>();
  checkAnswer = output<boolean>();
  inputValue = signal('');
  isCorrectAnswer = signal(false);

  onSubmit() {
    this.isCorrectAnswer.set(
      this.randomNumbersService.countNumber(this.randomDigit()) ===
        parseFloat(this.inputValue())
    );

    this.checkAnswer.emit(this.isCorrectAnswer());
  }

  onReset() {
    window.location.reload();
  }
}
