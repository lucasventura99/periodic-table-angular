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
  colors:  {
    'alkali-metal': '#fd7048',
    'alkaline-earth-metal': '#a78a21',
    'lanthanoid':' #cd6ba1',
    'actinoid': '#ff7bff',
    'transition-metal': '#9464d4',
    'post-transition-metal':' #329247',
    'metalloid': '#33cbcb',
    'other-nonmetal': '#0574bf',
    'noble-gas': '#8151a4', 
    'unknown': '#949393'
  };
 

  constructor( private http: HttpService,
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

  getColor(group: string) {
    return this.colors;
  }
}
