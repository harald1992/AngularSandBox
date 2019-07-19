import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { WebshopComponent } from './webshop.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './shopping/edit-shopping-list/edit-shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { WebshopRoutingModule } from './webshop-routing.module';
import { AppDirectivesModule } from 'src/app/shared/directives/directives.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebshopRoutingModule,
    AppDirectivesModule
  ],
  declarations: [
    WebshopComponent,
    ShoppingComponent,
    RecipeComponent,
    ShoppingListComponent,
    EditShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  exports: [],
  providers: [RecipeService]
})
export class WebshopModule {}
