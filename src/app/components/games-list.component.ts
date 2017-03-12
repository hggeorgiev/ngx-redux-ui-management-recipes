/**
 * Created by svet on 1/20/2017.
 */
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'games-list',
  templateUrl: 'games-list.template.html',

})
export class GamesListComponent  {
  @Input() games:any;
  @Input() count:number;
  @Input() page:number;
  @Input()loading:boolean;
  @Output() onPageChanged = new EventEmitter<number>();

  constructor() {
  }




}
