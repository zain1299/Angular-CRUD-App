import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  HostURL = 'http://localhost:3000';

  getEmployee() {
    return this.http.get(`${this.HostURL}/getEmployees`);
  }

  postEmployee(data: any) {
    return this.http.post(`${this.HostURL}/addEmployees`, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.HostURL}/deleteEmployee/${id}`);
  }

  updateEmployee(data: any, id: any) {
    return this.http.post(`${this.HostURL}/updateEmployee/${id}`, data);
  }
}
