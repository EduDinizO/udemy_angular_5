import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent, ShoppingListComponent } from './pages';
import { RecipeStartComponent, RecipeDetailComponent } from './components';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: RecipeDetailComponent },
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {

}
