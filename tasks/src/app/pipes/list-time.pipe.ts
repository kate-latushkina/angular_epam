import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursTime',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = value / 60;
    if (value > 0 && hours < 1) {
      return value + ' min';
    } else {
      return `${Math.floor(hours)}h ${value - (Math.floor(hours) * 60)}min`;
    }
  }
}
