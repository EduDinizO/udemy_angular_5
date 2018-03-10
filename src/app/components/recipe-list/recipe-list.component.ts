import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    public recipes: Recipe[];

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    public onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

}
