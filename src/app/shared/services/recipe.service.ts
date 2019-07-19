import { Injectable, EventEmitter } from '@angular/core';
import { Recipe, Ingredient } from '../models';
import { LoggingService } from './logging.service';

@Injectable()
// Injectable allows this service to be injected in another service. It adds some metadata attached to make that work.

//   { providedIn:'root' }
// ProvidedIn root makes sure this service will be the same instance in all the components it is injected in.
// This would be almost the same as adding the service to the provider of the highest module (app.module.ts)
export class RecipeService {
  private recipeList: Recipe[];
  recipeListChanged: EventEmitter<Recipe[]> = new EventEmitter();

  constructor(private loggingService: LoggingService) {
    if (!this.recipeList) {
      this.recipeList = [
        new Recipe(
          'Schnitzel Menu',
          'Lekker man',
          'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
          [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
        ),
        new Recipe(
          'Burger Menu',
          'Nomnom',
          'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
          [new Ingredient('Buns', 1), new Ingredient('Beef', 1)]
        )
      ];
    }
  }

  getRecipes(): Recipe[] {
    this.loggingService.statusUpdated.emit('Returning Recipes');
    this.recipeListChanged.emit(this.recipeList);
    return this.recipeList.slice();

    // Slice omdat het een copy maakt van de originele recipeList.
    // Belangrijk => wanneer je veranderingen maakt aan de recipe-List moet je wel deze kopie updaten.
  }

  getRecipe(id: number) {
    return this.recipeList[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipeList.push(recipe);
    this.recipeListChanged.emit(this.recipeList.slice());
  }

  removeRecipe(id: number) {
    this.recipeList.splice(id);
    this.recipeListChanged.emit(this.recipeList.slice());
  }
}
