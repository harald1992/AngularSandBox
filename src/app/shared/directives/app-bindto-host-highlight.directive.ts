import {
  Directive,
  HostBinding,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appAppBindtoHostHighlight]'
})
export class AppBindtoHostHighlightDirective implements OnInit {
  @Input() appAppBindtoHostHighlight: string[] = ['red, darkblue'];
  // @Input('appAppBindtoHostHighlight') highlightColor: string[] = [
  //   'red, darkblue'
  // ];

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  // define which property of the host you want to bind.
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.backgroundColor = this.appAppBindtoHostHighlight[0];
  }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(event: Event) {
    this.backgroundColor = this.appAppBindtoHostHighlight[1];
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.appAppBindtoHostHighlight[0];
  }
}
