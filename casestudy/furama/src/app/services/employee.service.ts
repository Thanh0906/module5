import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Employee} from "../modle/employee";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${API_URL}/employeeList`);
  }

  save(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${API_URL}/employeeList`, employee);
  }

  findById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${API_URL}/employeeList/${id}`);
  }

  update(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${API_URL}/employeeList/${id}`, employee);
  }

  delete(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${API_URL}/employeeList/${id}`);
  }
}
