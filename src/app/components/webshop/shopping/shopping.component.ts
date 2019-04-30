import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  shoppingList: Ingredient[] = [
    {
      name: 'Cheese',
      amount: 1,
      price: 3.6
    },
    new Ingredient('Corn', 6, 2.4)
    // Works too because of constructor in Ingredient Model.
  ];
  constructor() {}

  ngOnInit() {}

  addIngredient(ingredient: Ingredient) {
    const ingr = ingredient;
    ingr.price = this.roundTo2Decimals(Math.random());
    this.shoppingList.push(ingr);
  }

  roundTo2Decimals(input: number) {
    return Math.round(input * 100) / 100;
  }
}
