import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';
import { LoginResponse } from './login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = ' http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  get_company(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/api/companies/`);
  }

  get_vacancy_by_company(companyId): Observable<Vacancy[]> {
    const url = `${this.baseUrl}/api/companies/${companyId}/vacancies/`;
    return this.http.get<Vacancy[]>(url);
  }

  get_top_ten(): Observable<any> {
    const url = `${this.baseUrl}/api/vacancies/top_ten/`;
    return this.http.get<any>(url);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/api/login/`, {
      username,
      password
    });
    }
}
