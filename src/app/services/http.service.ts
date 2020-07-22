import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getElements() {
    return this.http.get<any>('https://neelpatel05.pythonanywhere.com');
  }
}
