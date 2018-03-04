import { Injectable, EventEmitter } from '@angular/core';
import { Recipe, Ingredient } from '../models';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Sopa',
            'Para tomar no frio',
            'https://t2.rg.ltmcdn.com/pt/images/2/6/4/img_sopa_de_mandioca_462_600.jpg',
            [
                new Ingredient('Água', 1),
                new Ingredient('Ervilha', 5),
            ],
        ),
        new Recipe(
            'Macarrão',
            'Vem da Itália',
            'https://img.cybercook.uol.com.br/imagens/receitas/406/massa-de-macarrao.jpg',
            [
                new Ingredient('Massa', 1),
                new Ingredient('Molho', 2),
            ],
        ),
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }

}
