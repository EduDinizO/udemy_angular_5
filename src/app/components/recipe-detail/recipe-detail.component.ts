import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from '../../services';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    public recipe: Recipe;
    public recipeId: number;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.recipeId = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.recipeId);
        });
    }

    public onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

}
