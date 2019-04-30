import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHighlightDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
