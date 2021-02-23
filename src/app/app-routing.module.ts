import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSlotComponent } from './add-slot/add-slot.component';
import { AppointmentSlotComponent } from './appointment-slot/appointment-slot.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: '', component: AppointmentComponent },
  { path: 'appointments', component: AppointmentSlotComponent },
  { path: 'slot', component: AddSlotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
