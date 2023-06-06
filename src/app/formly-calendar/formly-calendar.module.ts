import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { CalendarModule } from 'primeng/calendar';
import { FormlyCalendar } from './formly-calendar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormlyCalendar
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormlyModule.forChild({
      types: [{
        name: 'calendar',
        wrappers: ['form-field'],
        component: FormlyCalendar
      }]
    })
  ]
})
export class FormlyCalendarModule {

}
