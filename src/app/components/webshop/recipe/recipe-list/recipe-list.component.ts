import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/shared/models';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: Recipe[];
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

  addRecipe(recipe: Recipe) {
    this.recipeService.addRecipe(recipe);
  }
}
