import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  private shoppingList: Ingredient[];
  shoppingListUpdated: EventEmitter<Ingredient[]> = new EventEmitter();

  constructor() {
    //   this.shoppingList = [
    //     { name: 'Cheese', amount: 1, price: 3.6 },
    //     new Ingredient('Corn', 6, 2.4)
    //   ];
  }

  getShoppingList(): Ingredient[] {
    return this.shoppingList;
  }

  addIngredient(ingr: Ingredient) {
    ingr.price = this.roundTo2Decimals(Math.random());
    this.shoppingList.push(ingr);
    this.shoppingListUpdated.emit(this.shoppingList);
  }

  roundTo2Decimals(input: number) {
    return Math.round(input * 100) / 100;
  }
}
