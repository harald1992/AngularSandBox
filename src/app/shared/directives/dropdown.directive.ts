import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;
  // De class open is nu binded aan de isOpen Boolean.

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
