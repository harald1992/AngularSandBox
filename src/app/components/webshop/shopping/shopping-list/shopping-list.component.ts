import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() shoppingList: Ingredient[];

  filter: string;
  filteredShoppingList: Ingredient[];
  selectedIngredientIndex: number;

  constructor() {}

  ngOnInit() {
    if (!this.filteredShoppingList) {
      this.filteredShoppingList = this.shoppingList;
    }
  }

  filterShoppingList(input: string) {
    if (input) {
      this.filteredShoppingList = this.shoppingList.filter(
        (ingr: Ingredient) => {
          return ingr.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        }
      );
    } else {
      this.filteredShoppingList = this.shoppingList;
    }
  }

  select(index: number) {
    this.selectedIngredientIndex = index;
    console.log('select clicked');
    console.log(index);
  }
}
