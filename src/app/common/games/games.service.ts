import {Injectable, Inject} from '@angular/core';
import {Response, Http, Headers, RequestOptions, Jsonp} from "@angular/http";
import {Store} from "@ngrx/store";
import * as fromRoot from "../index"


@Injectable()
export class GamesService {

  public page:number;

  constructor(private jsonp:Jsonp, private store: Store<fromRoot.AppState>) {
    store.select(fromRoot.getGamesPage).subscribe((page) => {
      this.page = page;
    });
  }


  /*
  Get the list of games
   */
  query() {
      let pagination = this.paginate(this.page);
      let url = `http://www.giantbomb.com/api/games/?api_key=b89a6126dc90f68a87a6fe1394e64d7312b242da&?&offset=${pagination.offset}&limit=${pagination.limit}&format=jsonp&json_callback=JSONP_CALLBACK`;
     return  this.jsonp.request(url, { method: 'Get' })
        .map((res) => {
          return res['_body']
        });


  }



  /**
   * This function converts a page to a pagination
   * query.
   *
   * @param page
   *
   * @returns {{offset: number, limit: number}}
   */

   paginate(page:number,){
      let beginItem: number;
      let endItem:number;
      // Items per page are hardcoded, but you can make them dynamic by adding another parameter
      let itemsPerPage:number = 10;
      if(page == 1 ){
        beginItem = 0;
      } else {
        beginItem = (page - 1) * itemsPerPage;
      }
      return {
        offset:beginItem,
        limit:itemsPerPage
      }
  }



}
