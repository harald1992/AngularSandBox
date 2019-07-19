import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/shared/models';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
  // providers: [RecipeService]
  // Injection works hierarchical, so whenever it is provided in the WebshopModule for instance,
  // Then ALL the child components who has this service in the constructor will share the same instance.
})
export class RecipeComponent implements OnInit {
  recipeList: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();

    // Listens to the recipeListChanged event of recipeService.
    // When this event emits (after add or remove in the service for instance), it will update this recipeList.
    this.recipeService.recipeListChanged.subscribe((recipeList: Recipe[]) => {
      this.recipeList = recipeList;
    });
  }

  receiveSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
