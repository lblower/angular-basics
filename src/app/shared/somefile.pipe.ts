import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somefile'
})
export class SomefilePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'ere value gets transfrom' + value;
  }

}
