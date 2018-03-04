import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from '../../services';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    public selectedRecipe: Recipe;

    constructor(
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.recipeService.recipeSelected
            .subscribe(
                (recipe: Recipe) => {
                    this.selectedRecipe = recipe;
                }
            );
    }

}
