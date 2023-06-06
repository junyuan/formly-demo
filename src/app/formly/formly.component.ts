import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { dependencyFields } from './dependency-field';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent {
  form = new FormGroup({});
  fields = dependencyFields;


  formReuse = new FormGroup({});
  fieldsReuse: FormlyFieldConfig[] = [
    { key: 'name', type: 'input', props: { label: 'Name' } },
    ...dependencyFields
  ];


  formIp = new FormGroup({});
  fieldsIp: FormlyFieldConfig[] = [
    {
      key: 'ip', type: 'input',
      props: { label: 'IP', required: true },
      validators: { validation: ['ip'] },
    }
  ]


  formLo = new FormGroup({});
  fieldsLo: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'flex w-full items-center gap-3',
      fieldGroup: Array.from({ length: 3 })
        .map((_, i) => ({
          key: 'col3_' + i, type: 'input',
          className: 'w-full', props: { label: 'col3_' + i }
        }))
    },
    {
      fieldGroupClassName: 'flex w-full items-center gap-3',
      className: 'flex gap-3',
      fieldGroup: Array.from({ length: 2 })
        .map((_, i) => ({
          key: 'col2_' + i, type: 'input',
          className: 'w-full', props: { label: 'col2_' + i }
        }))
    }
  ];

  formCus = new FormGroup({})
  fieldsCus: FormlyFieldConfig[] = [{
    key: 'date',
    type: 'calendar',
    props: {
      label: 'Date',
      format: 'yy-mm-dd',
      icon: 'pa pa-calendar'
    }
  }];

  constructor(private title: Title) {
    title.setTitle('Formly Form');
  }
}
