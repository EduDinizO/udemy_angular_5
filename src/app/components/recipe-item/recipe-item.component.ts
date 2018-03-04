import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from '../../services';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
    }

    public onSelected() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }

}
