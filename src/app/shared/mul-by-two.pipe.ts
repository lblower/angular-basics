import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mulByTwo'
})
export class MulByTwoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value + 2 ;
  }

}
