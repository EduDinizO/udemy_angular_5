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
// DIRECTIVES
import {
    DropdownDirective
} from './directives';
// SERVICES
import {
    ShoppingListService,
    RecipeService,
} from './services';

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
        DropdownDirective,
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
