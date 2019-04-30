import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number;
  generatedServerId: number;
  serverStatus = 'Offline';
  serverName = '123456789';
  @Output() eventForParent = new EventEmitter<{
    serverName: string;
    serverStatus: string;
  }>();
  // @Output('AliasesWorkToo') eventForParent_ = new EventEmitter<{
  //   serverName: string;
  //   serverStatus: string;
  // }>();
  @Input('srvElements') servers: any;

  // alias, dus nu wordt [srvElements]=elements in html van servers gedaan.

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
    this.serverId = this.GenerateServerId();
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getStatusColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  GenerateServerId() {
    this.generatedServerId = Math.random() * 14;
    this.generatedServerId = Math.round(this.generatedServerId);

    // Nu wordt het event doorgestuurd hnaar de parent component die ernaar luisterd, en krijgt nu ook nog 2 parameters mee.
    this.eventForParent.emit({
      serverName: this.serverName,
      serverStatus: this.serverStatus
    });

    return this.generatedServerId;
  }
}
