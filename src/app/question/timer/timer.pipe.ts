import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: true,
})
export class TimerPipe implements PipeTransform {
  transform(value: number) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }
}
