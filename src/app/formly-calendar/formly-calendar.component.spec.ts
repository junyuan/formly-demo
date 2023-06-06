import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyCalendar } from './formly-calendar.component';

describe('FormlyCalendar', () => {
  let component: FormlyCalendar;
  let fixture: ComponentFixture<FormlyCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyCalendar]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormlyCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
