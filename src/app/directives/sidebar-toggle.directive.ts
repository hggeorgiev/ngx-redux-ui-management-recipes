/**
 * Created by Centroida-2 on 1/22/2017.
 */
import {Directive, Input, ElementRef, Renderer, HostListener} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../common/index";
import * as layout from '../common/layout/layout.actions'
@Directive({
  selector: '[sidebarToggle]'
})

export class SidebarToggleDirective {
  public leftSidebarState: boolean;
  public rightSidebarState: boolean;
  @Input() sidebarToggle: string;

  @HostListener('click', ['$event'])
  onClick(e) {
    /*
     Left sidenav toggle
     */
    if (this.sidebarToggle == "left" && this.leftSidebarState) {
      this._store.dispatch(new layout.CloseLeftSidenavAction());
    } else if(this.sidebarToggle == "left" && !this.leftSidebarState) {
      this._store.dispatch(new layout.OpenLeftSidenavAction())
    }

    /*
     Right sidenav toggle
     */
    if (this.sidebarToggle == "right" && this.rightSidebarState) {
      this._store.dispatch(new layout.CloseRightSidenavAction());
    } else if(this.sidebarToggle == "right" && !this.rightSidebarState) {
      this._store.dispatch(new layout.OpenRightSidenavAction());
    }
  }

  constructor(private el: ElementRef,private renderer: Renderer, private _store: Store<fromRoot.AppState>) {
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state) => {
      this.leftSidebarState = state;
    });

    this._store.select(fromRoot.getLayoutRightSidenavState).subscribe((state) => {
      this.rightSidebarState = state;
    });



  }

}
