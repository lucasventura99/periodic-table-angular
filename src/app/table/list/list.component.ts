import { Element } from './../../interfaces/Element';
import { HttpService } from './../../services/http.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  elements: Element[];
  element: Element;

  constructor(private http: HttpService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getElements();
  }

  getElements() {
    try {
      this.http.getElements()
        .subscribe(resp => {
          this.elements = resp;
        })
    } catch (error) {
      alert('Impossible to fetch elements');
      console.log(error)
    }

  }

  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>, element) {
    this.element = element;
    this.modalRef = this.modalService.show(template);
  }
}
