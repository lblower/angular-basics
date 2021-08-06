import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomefilePipe } from './somefile.pipe';
import { AddDotsToEndPipe } from './add-dots-to-end.pipe';
import { MulByTwoPipe } from './mul-by-two.pipe';
import { HighlitDirective } from './highlit.directive';



@NgModule({
  declarations: [SomefilePipe, AddDotsToEndPipe, MulByTwoPipe, HighlitDirective],
  imports: [
    CommonModule
  ],
  exports:[SomefilePipe , MulByTwoPipe, HighlitDirective]
})
export class SharedModule { }
