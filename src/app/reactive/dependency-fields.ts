import { FormControl } from "@angular/forms";

export const dependencyFields = () => {
  const fields = {
    type: new FormControl(0),
    companyName: new FormControl(''),
  };
  fields.type.valueChanges.subscribe(val => {
    if (val === 0) {
      fields.companyName.reset();
      fields.companyName.disable();
    }
    else {
      fields.companyName.enable();
    }
  })
  return fields;
}
