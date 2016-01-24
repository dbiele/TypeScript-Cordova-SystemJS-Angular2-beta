import {Component} from 'angular2/core';

@Component({
    selector: 'test-app',
    templateUrl: 'scripts/app/app.component.html'
    //template: '<h1>My First {{title}} App</h1>'
})
export class AppComponent {
    public title: string = 'Angular2';
    public dateDayMonthYearString: string = '';
    constructor() {
        let today: Date = new Date();
        let dateDayMonthYear: string = `The current date is ${today.toLocaleDateString()}.`;
        this.dateDayMonthYearString = dateDayMonthYear;
    }
}