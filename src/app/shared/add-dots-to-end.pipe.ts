import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDotsToEnd'
})
export class AddDotsToEndPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
