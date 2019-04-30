import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private htmlElement: ElementRef) {}

  ngOnInit() {
    this.htmlElement.nativeElement.style.backgroundColor = 'Green';
  }
}
