import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    constructor() { }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    public getIngredients() {
        return this.ingredients.slice();
    }

    public addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
