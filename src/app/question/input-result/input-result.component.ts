import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-result.component.html',
  styleUrl: './input-result.component.css',
})
export class InputResultComponent {
  inputValue = '';
  onSubmit() {}
}
