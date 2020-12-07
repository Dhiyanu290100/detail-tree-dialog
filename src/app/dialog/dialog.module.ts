import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';

import {HttpClientModule} from '@angular/common/http';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import { FormFieldOverviewExampleComponent } from './../form-field-overview-example/form-field-overview-example.component';
import { MaterialModule } from './../../material-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
   ],
  entryComponents: [
    DialogComponent
  ], 
  declarations: [
    DialogComponent,
    FormFieldOverviewExampleComponent
  ],
  exports: [

  ]
})

export class DialogModule {}