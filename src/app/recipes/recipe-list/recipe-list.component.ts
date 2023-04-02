import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://www.savingdessert.com/wp-content/uploads/2018/05/Spicy-Honey-Lime-Salmon-Recipe-5.jpg')
  ];

}
