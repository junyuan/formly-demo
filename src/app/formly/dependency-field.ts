import { FormlyFieldConfig } from "@ngx-formly/core";

export const dependencyFields: FormlyFieldConfig[] = [
  {
    key: 'type',
    type: 'select',
    defaultValue: 0,
    props: {
      label: 'Type',
      placeholder: 'Select',
      options: [
        { label: 'Person', value: 0 },
        { label: 'Company', value: 1 }
      ]
    },
  },
  {
    key: 'companyName',
    type: 'input',
    props: {
      label: 'Company Name',
    },
    expressions: {
      'props.disabled': '!model.type',
      'model.companyName':"!model.type?'':model.companyName"
    }
  }
]
