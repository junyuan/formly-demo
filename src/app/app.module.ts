import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyComponent } from './formly/formly.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { IpValidator } from './validators/ip-validator';
import { IpValidatorMessage } from './validators/ip-validator-message';
import { FormlyCalendarModule } from './formly-calendar/formly-calendar.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactiveComponent,
    FormlyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    FormlyModule.forRoot({
      validators: [{
        name: 'ip', validation: IpValidator
      }],
      validationMessages: [
        { name: 'ip', message: IpValidatorMessage },
        {
          name: 'required', message: (error, config: FormlyFieldConfig) =>
            `${config.props?.label} is required`
        },

      ]
    }),
    FormlyPrimeNGModule,
    FormlyCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
