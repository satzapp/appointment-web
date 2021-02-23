import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import * as moment from 'moment';


@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.scss']
})
export class AddSlotComponent implements OnInit {
  appointmentForm: FormGroup | any;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private appointmentService: AppointmentService,
    public dialogRef: MatDialogRef<AddSlotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  async onSubmit() {
    this.submitted = true;

    if (this.appointmentForm.invalid) {
      swal.fire(
        'Bad!',
        'Someting went wrong!',
        'error'
      );
      return;
    }

    let payload: any = {
      'patientName': this.appointmentForm.value.patientName,
      'age': this.appointmentForm.value.age,
      'mobile': this.appointmentForm.value.mobile,
      'gender': this.appointmentForm.value.gender,
      'fromTime': this.appointmentForm.value.fromTime,
      'toTime': this.appointmentForm.value.toTime,
      'date': (this.data && this.data.selectedDate && this.data.selectedDate !== null) ? moment(this.data.selectedDate).format('YYYY-MM-DD') : moment(new Date()).format('YYYY-MM-DD')
    };

    let response: any = await this.appointmentService.postAppointment(payload);
    if (response.code == 200 && response.errors == false) {
      swal.fire(
        'Good!',
        response.data.attributes.message,
        'success'
      );
      this.onReset();
      this.router.navigate(['/appointments']);
    } else {
      swal.fire(
        'Bad!',
        response.data.attributes.message,
        'error'
      );
    }
  }

  get f() { return this.appointmentForm.controls; }

  createForm() {
    this.appointmentForm = this.formBuilder.group({
      'patientName': ['', Validators.required],
      'age': [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      'mobile': [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      'gender': ['Male',],
      'fromTime': [null, Validators.required],
      'toTime': [null, Validators.required]
    });
  }

  onReset() {
    this.submitted = false;
    this.appointmentForm.reset();
    this.dialog.closeAll();
  }

}
