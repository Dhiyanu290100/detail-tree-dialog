import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { DialogComponent } from './dialog/dialog.component';

import { MaterialModule } from './../material-module';

import { DialogModule } from './dialog/dialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
 import {MatNativeDateModule} from '@angular/material';

 import { FormFieldOverviewExampleComponent } from './form-field-overview-example/form-field-overview-example.component';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    MaterialModule,
    BrowserAnimationsModule,
    DialogModule,
    // CommonModule,
    MatNativeDateModule,
    HttpClientModule,
    ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    // FormFieldOverviewExampleComponent,  
    
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    ],
  providers: [SearchService]
})
export class AppModule { }
