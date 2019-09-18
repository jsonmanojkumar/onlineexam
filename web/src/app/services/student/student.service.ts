import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: any = '';
  constructor(private http: HttpClient) {
    this.url = environment.api_url + '/student';
  }

  create(student): Observable<any> {
    return this.http.post(`${this.url}/create`, student);
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.url}/get-by-id/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.url}/get-all`);
  }
  delete(id): Observable<any> {
    return this.http.put(`${this.url}/delete`, { student_id: id });
  }

  update(id, student): Observable<any> {
    return this.http.put(`${this.url}/update/${id}`, student);
  }

}
