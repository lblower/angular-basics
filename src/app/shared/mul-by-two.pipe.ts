import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mulByTwo'
})
export class MulByTwoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    // return Math.random() * 10 + value;
    return value + 2 ;
  }

}

// only to update what is printed on a html page.

// PURe pipe and im-pure pipe -
// Pure -  return same value for same arguments   w.r.t transform (value , ...arg) - is arguments
