import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

interface CalendarProps extends FormlyFieldProps {
  format: string;
  icon: string;
}

@Component({
  selector: 'app-formly-calendar',
  templateUrl: './formly-calendar.component.html',
  styleUrls: ['./formly-calendar.component.scss']
})
export class FormlyCalendar extends FieldType<FormlyFieldConfig<CalendarProps>> {

}
