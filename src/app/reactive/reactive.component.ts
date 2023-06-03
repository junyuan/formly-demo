import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

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
  form: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(0),
      companyName: new FormControl(''),
    });
    this.form.get('type')?.valueChanges.subscribe(val => {
      if (val === 0) {
        this.form.get('companyName')?.reset();
        this.form.get('companyName')?.disable();
      }
      else {
        this.form.get('companyName')?.enable();
      }
    })
    //this.form.patchValue({ type: 0 });
  }

}
