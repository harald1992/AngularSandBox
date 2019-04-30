import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() shoppingList: Ingredient[];

  constructor() {}

  ngOnInit() {}
}
