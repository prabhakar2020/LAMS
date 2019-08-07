import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leave & Attendance Management System';
  footer= 'Design By Prabhakar';
  public minDate: Date = new Date ("05/07/1900");
    public maxDate: Date = new Date ("12/31/2020");
    public dateValue: Date = new Date ("05/16/2017");
    constructor () {}
}
