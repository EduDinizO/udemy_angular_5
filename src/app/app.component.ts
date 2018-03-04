import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public loadFeature = 'recipe';

    public onNavigate(feature: string) {
        this.loadFeature = feature;
    }
}
