import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Output() public recipeSelected = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }

    public onSelected() {
        this.recipeSelected.emit();
    }

}
