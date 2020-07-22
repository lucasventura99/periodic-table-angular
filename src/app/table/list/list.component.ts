import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  elements: any;

  constructor( private http: HttpService) { }

  ngOnInit(): void {
    this.getElements();
  }

  getElements() {
    this.http.getElements()
      .subscribe(resp => {
        this.elements = resp;
      }) 
  }

}
