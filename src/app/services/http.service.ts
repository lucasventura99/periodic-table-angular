import { Element } from './../interfaces/Element';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getElements() {
    return this.http.get<Element[]>('https://neelpatel05.pythonanywhere.com');
  }
}
