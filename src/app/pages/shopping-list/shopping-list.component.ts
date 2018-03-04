import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    public ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() { }

    ngOnInit() {
    }

    public onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

}
