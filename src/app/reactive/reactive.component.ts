import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),

    });
  }

}
