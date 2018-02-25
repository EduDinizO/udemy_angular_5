import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Sopa', 'Caldo', 'https://t2.rg.ltmcdn.com/pt/images/2/6/4/img_sopa_de_mandioca_462_600.jpg'),
        new Recipe('Macarrão', 'Massa', 'https://img.cybercook.uol.com.br/imagens/receitas/406/massa-de-macarrao.jpg'),
    ];

    constructor() { }

    ngOnInit() {
    }

}
