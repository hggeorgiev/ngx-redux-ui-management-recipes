import {Directive, ElementRef, Renderer, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from "../common/index";
let $ = require('jquery');

@Directive({selector: '[sidebarWatch]'})

export class SidebarWatchDirective implements OnInit{
  constructor(private el: ElementRef, private _store: Store<fromRoot.AppState>) {}

  /*
   Doing the checks on ngOnInit makes sure the DOM is fully loaded and the
   elements are available to be selected
   */
  ngOnInit() {
    /*
     Watch for the left sidebar state
     */
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className == 'left-sidebar') {
        if (state) {
          $("#main-content").css("margin-left", "300px");
          $(this.el.nativeElement).css('width', '300px');
        } else {
          $("#main-content").css("margin-left", "0");
          $(this.el.nativeElement).css('width', '0');
        }
      }
    });

    /*
     Watch for the right sidebar state
     */
    this._store.select(fromRoot.getLayoutRightSidenavState).subscribe((state) => {
      /*
       You can use classes (addClass/removeClass) instead of using jQuery css(), or you
       can go completely vanilla by using selectors such as windiw.getElementById(). .
       */
      if (this.el.nativeElement.className == 'right-sidebar') {
        if (state) {
          $('#fade').addClass('fade-in');
          $("#rightBar-body").css("opacity", "1");
          $("body").css("overflow","hidden");
          $(this.el.nativeElement).css('width', '60%');
        } else {
          $('#fade').removeClass('fade-in');
          $("#rightBar-body").css("opacity", "0");
          $("body").css("overflow","auto");
          $(this.el.nativeElement).css('width', '0');
        }
      }
    });
  }

}
