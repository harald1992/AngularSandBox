import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: Recipe[];
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectRecipe(recipe: Recipe) {
    // console.log(recipe);
    this.selectedRecipe.emit(recipe);
  }
}
