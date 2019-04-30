import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Ingredient } from 'src/app/shared/models';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  form: FormGroup;
  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      ingredient: this.fb.group({
        // Nesting to allow ingredient Object instead of all loose parameters.
        name: '',
        amount: ''
      }),
      comment: ''
    });
  }

  onSubmit(ingredient: Ingredient, comment: string) {
    console.log('ingredient in the child component = ' + ingredient);
    console.log('comment value = ' + comment);
    this.addIngredient.emit(this.form.value.ingredient);
  }
}
