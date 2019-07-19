import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/shared/services/logging.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.css'],
  providers: []
})
export class WebshopComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.logStatusChange(
      'This log inits in webshopComponent via LoggingService.'
    );
  }
}
