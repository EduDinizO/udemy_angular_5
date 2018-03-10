import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// APP COMPONENT
import { AppComponent } from './app.component';
// APP ROUTING
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import {
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
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
        RecipeStartComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    providers: [
        ShoppingListService,
        RecipeService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
