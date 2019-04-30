import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() count: number;
  arrayOfIs: string[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.count % 2 === 0) {
      this.arrayOfIs.push('I');
    }
  }
}
