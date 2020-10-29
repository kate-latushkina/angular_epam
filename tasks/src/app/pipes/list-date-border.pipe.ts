import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listDateBorder'
})
export class ListDateBorderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
