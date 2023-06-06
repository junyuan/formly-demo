import { FormlyFieldConfig } from "@ngx-formly/core";

export function IpValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}
