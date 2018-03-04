import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from '../../services';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() public recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
    ) { }

    ngOnInit() {
    }

    public onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

}
