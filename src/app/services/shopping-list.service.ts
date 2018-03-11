import { Injectable } from '@angular/core';
import { Ingredient } from '../models';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    public ingredientsChanged = new Subject<Ingredient[]>();

    constructor() { }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    public getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}
