import { NgModule } from '@angular/core';
import { DisplayDetailsAssignmentComponent } from './display-details-assignment/display-details-assignment.component';
import { UsernameAssignmentComponent } from './username-assignment/username-assignment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssignmentsComponent } from './assignments.component';
import { DatabindingDeepdiveAssignmentComponent } from './databinding-deepdive-assignment/databinding-deepdive-assignment.component';
import { GameControlComponent } from './databinding-deepdive-assignment/game-control/game-control.component';
import { OddComponent } from './databinding-deepdive-assignment/odd/odd.component';
import { EvenComponent } from './databinding-deepdive-assignment/even/even.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DisplayDetailsAssignmentComponent,
    UsernameAssignmentComponent,
    AssignmentsComponent,
    DatabindingDeepdiveAssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  exports: [
    AssignmentsComponent,
    DisplayDetailsAssignmentComponent,
    UsernameAssignmentComponent
  ]
})
export class AssignmentsModule {}
