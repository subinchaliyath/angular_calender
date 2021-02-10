import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-monthly-calender',
  templateUrl: './monthly-calender.component.html',
  styleUrls: ['./monthly-calender.component.scss']
})
export class MonthlyCalenderComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  constructor() { }
  setView(view: CalendarView) {
    this.view = view;
  }

  ngOnInit(): void {
    
  }

}
