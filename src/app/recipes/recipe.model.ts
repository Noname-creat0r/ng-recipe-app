import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
  public title: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(title: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.title = title;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients
  }

}
