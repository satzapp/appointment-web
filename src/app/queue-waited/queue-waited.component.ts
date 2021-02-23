import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'queue-waited',
  templateUrl: './queue-waited.component.html',
  styleUrls: ['./queue-waited.component.scss']
})
export class QueueWaitedComponent implements OnChanges {
  @Input() queuelist: any;
  displayedColumns: string[] = ['patient', 'contact', 'appointment'];
  dataSource: any;
  dataSourceIsEmpty: boolean = false;
  constructor() { }

  async ngOnChanges() {
    var datas = await this.queuelist ? this.queuelist.data : {};
    var serviceSource = [];
    if (datas) {
      for (var serviceDate of datas) {
        serviceSource.push({
          patient: serviceDate.patientName ? serviceDate.patientName : 'Unknown',
          contact: serviceDate.mobile ? serviceDate.mobile : '',
          appointment: serviceDate.fromTime ? serviceDate.fromTime : '00:00',
          age: serviceDate.age ? serviceDate.age : '00',
          gender: serviceDate.gender ? serviceDate.gender : 'Male',
          profileUrl: '../../assets/images/user.png'
        })
      }
    }
    this.dataSource = await serviceSource;
    this.dataSourceIsEmpty = this.dataSource.length;
  }
}
