import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: any = '';
  constructor(private http: HttpClient) {
    this.url = environment.api_url + '/category';
  }

  create(category): Observable<any> {
    console.log(category);
    return this.http.post(`${this.url}/create`, category);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.url}/get-all`);
  }

  delete(id): Observable<any> {
    return this.http.put(`${this.url}/delete`, { category_id: id });
  }

  update(id, category): Observable<any> {
    return this.http.put(`${this.url}/update/${id}`, category);
  }
}
