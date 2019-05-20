import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttons: any[] = [
    // { name: 'HomePage', path: '' },
    { name: 'Assignments', path: '/assignments' },
    { name: 'Practice Stuff', path: '/practice-stuff' },
    { name: 'Server Data Binding', path: '/server-data-binding' },
    { name: 'Directives Deep Dive', path: '/directives-deep-dive' },
    { name: 'Webshop', path: '/webshop' }
  ];
  constructor() {}

  ngOnInit() {}
}
