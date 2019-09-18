import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaperService {

  url: any = '';
  constructor(private http: HttpClient) {
    this.url = environment.api_url + '/paper';
  }

  create(paper): Observable<any> {
    console.log(paper);
    return this.http.post(`${this.url}/create`, paper);
  }

  getPaper(data): Observable<any> {
    return this.http.post(`${this.url}/get`, data);
  }


  getAll(): Observable<any> {
    return this.http.get(`${this.url}/get-all`);
  }

  
  delete(id): Observable<any> {
    return this.http.put(`${this.url}/delete`, { paper_id: id });
  }

  update(id, paper): Observable<any> {
    return this.http.put(`${this.url}/update/${id}`, paper);
  }


}
