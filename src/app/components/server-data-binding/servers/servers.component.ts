import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  inntertextt: string;

  // ViewChild argument is the selector of this element.
  @ViewChild('serverContentInputForViewChild')
  serverContentInputForViewChild: ElementRef; // You can use a local reference as input.

  @ViewChild(ServerComponent) serverComponentView; // Can also select a component: then use cComponent type in viewchild input.
  // This selects the first occorrence of the Component.

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! The name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ListenedForChildFunction(data: { serverName: string; serverStatus: string }) {
    this.inntertextt =
      'Servername: ' + data.serverName + '  serverStatus: ' + data.serverStatus;
  }

  printLocalReference(inputElement: HTMLInputElement) {
    console.log(inputElement.value);
  }

  consoleLogValueViaViewchild() {
    // This value is defined via the @Viewchild above.
    // Type is element-ref
    console.log(this.serverContentInputForViewChild.nativeElement.value);
    // Not reccommended to change the value for example via this method. Better use directives or property binding.
  }
}
