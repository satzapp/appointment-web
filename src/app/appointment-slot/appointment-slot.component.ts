import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSlotComponent } from '../add-slot/add-slot.component';
import { AppointmentService } from '../appointment.service';
import * as moment from 'moment';


@Component({
  selector: 'app-appointment-slot',
  templateUrl: './appointment-slot.component.html',
  styleUrls: ['./appointment-slot.component.scss']
})

export class AppointmentSlotComponent implements OnInit {
  selectedDate: any;
  appointmentSlots: any;
  constructor(private dialog: MatDialog, private appointmentService: AppointmentService) { }

  ngOnInit() { 
    this.getiingSlot(null);
  }

  onSelection(dates: any) {
    this.selectedDate = dates;
    if (dates !== null ) {
      this.getiingSlot(moment(dates).format('YYYY-MM-DD'));
    }
  }

  async getiingSlot(date: any) {
    let appointmentSlots: any = await this.appointmentService.getAppointments(date).toPromise();
    this.appointmentSlots = appointmentSlots.data;
  }
  
  openDialog(): void {
    this.dialog.open(AddSlotComponent,{ height: '600px', width: '640px', disableClose: true, data: { selectedDate: this.selectedDate ? this.selectedDate : new Date() } });
  }

}
