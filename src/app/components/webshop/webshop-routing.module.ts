import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WebshopComponent } from './webshop.component';

const route: Routes = [
  {
    path: 'webshop',
    component: WebshopComponent,
    children: [
      { path: 'shopping', component: ShoppingComponent },
      { path: 'recipe', component: RecipeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  declarations: [],
  exports: [RouterModule]
})
export class WebshopRoutingModule {}
