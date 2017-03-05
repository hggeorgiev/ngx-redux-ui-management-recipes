
import {
  Component, ChangeDetectionStrategy, Output, ViewChild, EventEmitter, Input, ElementRef} from '@angular/core';

import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'template-modal',
  templateUrl: 'template-modal.template.html'
})
export class TemplateModalComponent {

  private modalName:string =  'templateFormModal';
  private modalRef:NgbModalRef;

  @ViewChild('content') _templateModal:ElementRef;

  @Input() set modalState(_modalState:any) {
    console.log(_modalState);
    if(_modalState == this.modalName) {
      this.openModal()
    } else if(this.modalRef) {
      this.closeModal();
    }
  }

  @Output() onCloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalRef = this.modalService.open(this._templateModal, {backdrop: 'static' , keyboard: false, size: 'sm'})
  }

  closeModal()  {
    this.modalRef.close();
  }


}
