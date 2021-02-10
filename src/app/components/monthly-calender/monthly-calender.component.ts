import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-calender',
  templateUrl: './monthly-calender.component.html',
  styleUrls: ['./monthly-calender.component.scss']
})
export class MonthlyCalenderComponent implements OnInit {
  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
