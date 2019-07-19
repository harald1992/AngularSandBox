import { Injectable, EventEmitter } from '@angular/core';
import {} from 'events';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  statusUpdated: EventEmitter<string> = new EventEmitter();

  logStatusChange(text: string) {
    console.log('New Log: ' + text);
    console.log(`New Log: ${text}`);
  }
}
