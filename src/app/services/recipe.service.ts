import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Sopa', 'Caldo', 'https://t2.rg.ltmcdn.com/pt/images/2/6/4/img_sopa_de_mandioca_462_600.jpg'),
        new Recipe('Macarrão', 'Massa', 'https://img.cybercook.uol.com.br/imagens/receitas/406/massa-de-macarrao.jpg'),
    ];

    public recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }

}
