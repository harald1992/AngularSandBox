import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe(
      'Test Recipe1',
      'test recipes description dfsd 11234',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    ),
    new Recipe(
      'Test Recipe2',
      'blablabalj',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    )
  ];

  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}

  receiveSelectedRecipe(recipe: Recipe) {
    console.log('selected recipe in the recipeCommponent: ');
    console.log(recipe);
    this.selectedRecipe = recipe;
  }
}
