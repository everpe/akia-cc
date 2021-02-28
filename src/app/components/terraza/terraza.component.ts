import { Inject,Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-terraza',
  templateUrl: './terraza.component.html',
  styleUrls: ['./terraza.component.css']
})
export class TerrazaComponent implements OnInit {
//Mapa google
  lat = 18.50;
  lng = -99.252592;
   // scroll
   activeSection = 1;
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

    /**
   * Le envia la seccion a la que quiere movers y el num para la variable seccionActual
   * @param e 
   * @param i 
   */
  fullPageScroll(e: HTMLElement, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document
    });
    this.activeSection = i;
  }

}
