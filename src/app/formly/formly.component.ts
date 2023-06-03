import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { dependencyFields } from './dependency-field';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent {
  form = new FormGroup({});

  fields = dependencyFields;
}
