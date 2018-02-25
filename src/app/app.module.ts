import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// APP COMPONENT
import { AppComponent } from './app.component';
// COMPONENTS
import {
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
} from './components';
// PAGES
import {
    RecipesComponent,
    ShoppingListComponent,
} from './pages';
// MODELS
import {
    Recipe,
    Ingredient,
} from './models';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
