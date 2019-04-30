import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guest';
  toggleDate = false;
  currentDate = new Date();

  constructor() {}

  onToggleDate() {
    this.toggleDate = !this.toggleDate;
    if (this.toggleDate === false) {
      // For efficiency, only update when its gonna show
      this.currentDate = new Date();
    }
  }

  generateColour() {
    return 'green';
  }
}
