import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

// if making a html directive , make sure code runs after ngAfterViewInit Life cycle , else it will not work

@Directive({
  selector: '[appcolor]'
})
export class HighlitDirective {

  defaultColor =  'red';
  @Input() bgColor = null;


  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 }

 @HostListener('mouseenter', ['$event.target'])
 onHover(btn) {
  //  console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
   this.renderer.setStyle(
    this.elementRef.nativeElement, 'fontSize',
   '50px' );
}

@HostListener('mouseleave', ['$event.target'])
onLeave(elemntref) {
  this.renderer.setStyle(
    this.elementRef.nativeElement, 'fontSize',
   '30px' );
}


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef);
    console.log("---------------------")
    console.log(this.renderer);
   }

   ngOnChanges() {
     this.addColor();
  }

  addColor(){
    console.log('I am here');
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'backgroundColor',
      this.bgColor || this.defaultColor );
  }

}
