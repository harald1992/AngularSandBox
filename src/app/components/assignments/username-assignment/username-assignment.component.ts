import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-assignment',
  templateUrl: './username-assignment.component.html',
  styleUrls: ['./username-assignment.component.css'],
  styles: [
    `
      p {
        padding: 20px;
        background-color: gray;
        border: 1px solid red;
      }
    `
  ]
})
export class UsernameAssignmentComponent implements OnInit {
  userName = 'User Name';
  userNames = ['Username1', 'Username2'];
  userCreated = false;
  userNameCreationStatus = 'No user has been generated yet';

  constructor() {}

  ngOnInit() {}

  onCreateUser() {
    this.userNames.push(this.userName);
    this.userCreated = true;
    this.userNameCreationStatus =
      'User was created with userName  ' + this.userName;
  }
}
