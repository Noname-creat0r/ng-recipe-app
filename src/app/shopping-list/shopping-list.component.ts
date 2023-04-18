import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients!: Ingredient[];
  #igChangeSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.#igChangeSub = this.shoppingListService.ingredientsChanges.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy() {
    this.#igChangeSub.unsubscribe()
  }
}
