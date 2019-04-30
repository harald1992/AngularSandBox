import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-deepdive-assignment',
  templateUrl: './databinding-deepdive-assignment.component.html',
  styleUrls: ['./databinding-deepdive-assignment.component.css']
})
export class DatabindingDeepdiveAssignmentComponent implements OnInit {
  count: number;

  constructor() {}

  ngOnInit() {
    this.count = 0;
  }

  imcrementCount() {
    this.count++;
  }
}
