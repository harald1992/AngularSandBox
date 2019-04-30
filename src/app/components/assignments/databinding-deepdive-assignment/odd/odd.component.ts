import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() count: number;
  arrayOddNumbers: string[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.count % 2 !== 0) {
      // count is not even
      this.arrayOddNumbers.push('I');
    }
  }
}
