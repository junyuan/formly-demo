import { AbstractControl, ValidationErrors } from "@angular/forms";

export function IpValidator(control: AbstractControl): ValidationErrors {
  return /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? {} : { 'ip': true };
}
