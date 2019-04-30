import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ServerComponent, ServersComponent],
  exports: [ServerComponent, ServersComponent]
})
export class ServerDataBindingModule {}
