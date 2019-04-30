import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-practice-stuff-attribute]',
  templateUrl: './practice-stuff-attribute.component.html',
  styles: ['']
})
export class PracticeStuffAttributeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logEventData(event: any) {
    console.log(event);
  }

  getTargetValueFromEvent(event: any) {
    console.log((<HTMLInputElement>event.target).innerHTML);
  }
}
