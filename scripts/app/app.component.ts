import {Component} from 'angular2/core';

@Component({
    selector: 'test-app',
    templateUrl: 'scripts/app/app.component.html'
    //template: '<h1>My First {{title}} App</h1>'
})
export class AppComponent {
    public title = 'Angular2';
}