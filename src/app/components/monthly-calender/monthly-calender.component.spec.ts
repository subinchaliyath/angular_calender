import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCalenderComponent } from './monthly-calender.component';

describe('MonthlyCalenderComponent', () => {
  let component: MonthlyCalenderComponent;
  let fixture: ComponentFixture<MonthlyCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
