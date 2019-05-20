import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHighlightDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.border = '1px solid black'; // changing style this way is not deemed best practice
  }
}
