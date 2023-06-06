import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SelectItem } from 'primeng/api';
import { IpValidator } from '../validators/ip-validator';
import { dependencyFields } from './dependency-fields';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  types: SelectItem[] = [
    { label: 'Person', value: 0 },
    { label: 'Company', value: 1 }
  ]
  form: FormGroup = new FormGroup(dependencyFields());
  formReuse: FormGroup = new FormGroup({
    'name': new FormControl(),
    ...dependencyFields()
  });

  formIp: FormGroup = new FormGroup({ 'ip': new FormControl('', { validators: [Validators.required, IpValidator] }) })
  get ip() { return this.formIp.get('ip'); }

  formLo: FormGroup = new FormGroup({});
  col3Fields = Array.from({ length: 3 })
    .map((_, i) => ({ ['col3_' + i]: new FormControl() }))
    .reduce((pre, cur, i) => {
      pre = { ...cur, ...pre || {} };
      return pre;
    });
  col2Fields = Array.from({ length: 2 })
    .map((_, i) => ({ ['col2_' + i]: new FormControl() }))
    .reduce((pre, cur, i) => {
      pre = { ...cur, ...pre || {} };
      return pre;
    });
  keys = Object.keys;


  constructor(private title: Title) {
    title.setTitle('Reactive Form');
  }
  ngOnInit(): void {

    this.formLo = new FormGroup({
      ...this.col3Fields,
      ...this.col2Fields
    })
  }

}
