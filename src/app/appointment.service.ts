import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiURL: string = 'http://localhost:8081/api/';
  constructor(private http: HttpClient) { }

  getAppointments(date: any) {
    var response;
    if (date === null || date === "") {
      response = this.http.get(`${this.apiURL}/appointments`)
    } else {
      let params = new HttpParams();
      params = params.append('date', date);
      response = this.http.get(`${this.apiURL}/appointments`, { params: params });
    }

    return response;
  }

  async postAppointment(data: Array<String>) {
    return await this.http.post(`${this.apiURL}/appointment`, data).toPromise();
  }
}
