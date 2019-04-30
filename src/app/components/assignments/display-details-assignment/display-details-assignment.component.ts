import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details-assignment',
  templateUrl: './display-details-assignment.component.html',
  // styleUrls: ['./display-details-assignment.component.css'],
  styles: [
    `
      .displayColor {
        color: white;
      }
    `
  ]
})
export class DisplayDetailsAssignmentComponent implements OnInit {
  iD: number;
  password = '';
  detailsDisplayed = false;
  log = [];

  constructor() {
    this.iD = Math.random() * 1250;
    this.password = Math.random().toString(36);
  }

  ngOnInit() {}

  DisplayDetails() {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.log.push(this.log.length + 1);

    return this.detailsDisplayed;
  }

  // getDisplayColor() {
  //   return this.detailsDisplayed===true ? 'darkred' : 'orange';
  //   }

  getDisplayColor() {
    if (this.detailsDisplayed === true) {
      return 'blue';
    } else {
      return 'brown';
    }
  }
}
