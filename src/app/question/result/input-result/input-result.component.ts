import {
  Component,
  ElementRef,
  inject,
  input,
  OnChanges,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RandomNumbersService } from '../../random-numbers/random-numbers.service';

@Component({
  selector: 'app-input-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-result.component.html',
  styleUrl: './input-result.component.css',
})
export class InputResultComponent implements OnChanges {
  private randomNumbersService = inject(RandomNumbersService);
  randomDigit = input.required<number>();
  checkAnswer = output<boolean>();
  inputValue = signal('');
  isCorrectAnswer = signal(false);
  isTimeout = input.required<boolean>();
  @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>;

  ngOnChanges() {
    if (this.isTimeout()) {
      this.isCorrectAnswer.set(false);
      this.inputElement.nativeElement.disabled = this.isTimeout();
      this.inputElement.nativeElement.value = '';
    }
  }

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
