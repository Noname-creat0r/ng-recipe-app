import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Healthy hamburger',
      'This is simply a test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3qqlmv4he5rj8.cloudfront.net%2Fblog%2Fwp-content%2Fuploads%2F2015%2F04%2FiStock_000061637502_Small.jpg&f=1&nofb=1&ipt=e5628c388849e74fce4132a1c7c6fa872f354b355eb019e0cd5d8f26b2d11a76&ipo=images',
      [
        new Ingredient('buns', 2),
        new Ingredient('beef', 1),
        new Ingredient('tomato', 1),
        new Ingredient('salad', 2),
      ]
    ),
    new Recipe(
      'Killing oats',
      'can’t wait to talk about all things oatmeal. I’ve been an oatmeal lover since college and haven’t turned back since. From stove-top oats to overnight oats to slower cooker oats to oats in the Instant Pot…oatmeal will forever be my breakfast of choice. ',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffitfoodiefinds.com%2Fwp-content%2Fuploads%2F2018%2F03%2Foats.jpg&f=1&nofb=1&ipt=c5f023da83f8b5ddcc57a995755b84dc1502c6b983f6969309f9b55b2f0160aa&ipo=images',
      [
        new Ingredient('oats', 1),
        new Ingredient('greek yogurt', 1),
        new Ingredient('almond milk', 1),
        new Ingredient('protein powder', 2),
        new Ingredient('granola', 2),]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id]
  }

  getRecepies() {
    return this.recipes.slice();
  }

  addIngredintsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
