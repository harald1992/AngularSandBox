import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from 'src/app/shared/models';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  addIngredientsToShoppingList(selectedRecipe: Recipe) {
    console.log('clicked');
    for (let i = 0; i < selectedRecipe.ingredients.length; i++) {
      this.shoppingService.addIngredient(selectedRecipe.ingredients[i]);
    }
  }
}
