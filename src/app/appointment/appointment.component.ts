import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppointmentComponent implements OnInit {
  searchAppDate: any;
  appoitmentQueuelist: any;
  constructor(private appointmentService: AppointmentService) { }

  async ngOnInit() {
    this.appoitmentQueuelist = await this.appointmentService.getAppointments(null).toPromise();
  }

  async searchDate() {
    this.appoitmentQueuelist = await this.appointmentService.getAppointments(this.searchAppDate).toPromise();
  }

}
