import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseOver(eventdata: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
      // flags go here -> !important annotations for example
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'lightgray'
    );
  }
}
