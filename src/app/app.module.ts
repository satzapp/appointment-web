import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule, IgxDatePickerComponent, IgxDialogModule } from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QueueWaitedComponent } from './queue-waited/queue-waited.component';
import { AddSlotComponent } from './add-slot/add-slot.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentSlotComponent } from './appointment-slot/appointment-slot.component';
import { MatTableModule } from '@angular/material/table'
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDialogModule } from "@angular/material/dialog"
import { AppointmentService } from './appointment.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentSlotComponent,
    QueueWaitedComponent,
    AddSlotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    IgxCalendarModule,
    IgxDialogModule,
    MatGridListModule,
    MatToolbarModule,
    NgxMaterialTimepickerModule,
    MatDialogModule,
    HttpClientModule,
    SweetAlert2Module,
    MatButtonModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
