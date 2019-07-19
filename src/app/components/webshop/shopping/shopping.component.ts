import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/models';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  shoppingList: Ingredient[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingList = this.shoppingService.getShoppingList();
    this.shoppingService.shoppingListUpdated.subscribe(
      (shoppingList: Ingredient[]) => {
        this.shoppingList = shoppingList;
      }
    );
  }

  addIngredient(ingr: Ingredient) {
    this.shoppingService.addIngredient(ingr);
  }
}
