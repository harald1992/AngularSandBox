import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

export enum GameState {
  Running,
  Idle
}

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  state: GameState;
  @Output() counted = new EventEmitter();
  intervalTime: any;

  constructor() {
    this.state = GameState.Idle;
  }

  ngOnInit() {}

  startGame() {
    if (this.state !== GameState.Running) {
      this.state = GameState.Running;
      this.intervalTime = setInterval(() => {
        this.counted.emit();
      }, 1000);
    }
  }

  stopGame() {
    if (this.state !== GameState.Idle) {
      this.state = GameState.Idle;
      clearInterval(this.intervalTime);
    }
  }
}
