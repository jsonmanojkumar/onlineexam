import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  
  url: any = '';
  constructor(private http: HttpClient) {
    this.url = environment.api_url + '/subject';
  }

  create(subject): Observable<any> {
    console.log(subject);
    return this.http.post(`${this.url}/create`, subject);
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.url}/get-by-id/${id}`);
  }
  
  getAll(): Observable<any> {
    return this.http.get(`${this.url}/get-all`);
  }

  getByCategory(id): Observable<any> {
    return this.http.get(`${this.url}/get-by-category/${id}`);
  }
  delete(id): Observable<any> {
    return this.http.put(`${this.url}/delete`, { subject_id: id });
  }

  update(id, subject): Observable<any> {
    return this.http.put(`${this.url}/update/${id}`, subject);
  }



}
