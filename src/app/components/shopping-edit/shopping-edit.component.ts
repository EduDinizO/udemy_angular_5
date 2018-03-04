import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../models';
import { ShoppingListService } from '../../services';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') public nameInputRef: ElementRef;
    @ViewChild('amountInput') public amountInputRef: ElementRef;

    constructor(
        private slService: ShoppingListService,
    ) { }

    ngOnInit() {
    }

    public onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.slService.addIngredient(newIngredient);
    }

}
