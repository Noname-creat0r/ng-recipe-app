import { Component } from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  ingrName: string = '';
  ingrAmount: number = 0;

  constructor(private slService: ShoppingListService) {
  }

  onAddItem() {
    this.slService.addIngredient(new Ingredient(this.ingrName, this.ingrAmount));
  }
}
