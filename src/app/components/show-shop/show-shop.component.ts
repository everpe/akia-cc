import { Component, OnInit,Inject } from '@angular/core';
import {Shop} from '../../admin/models/shop';
import {Product} from '../../admin/models/product';
import {ShopService} from '../../admin/services/shop.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-show-shop',
  templateUrl: './show-shop.component.html',
  styleUrls: ['./show-shop.component.css']
})
export class ShowShopComponent implements OnInit {

  public rutaImagesProducts:string='http://localhost:8000/products/';
  public shop:Shop={} as Shop;
  products:Product[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private shop_service:ShopService) {
      this.setShop(this.data.id_shop);
      
  }


  ngOnInit(): void {
   
  }

/**
 * Define la tienda para el show
 */
  setShop(id_shop){
    
    this.shop_service.showShop(id_shop).subscribe((response:any) =>
    {
      this.shop=response.shop;
      // console.log(response);
      this.shop_service.showProductShop(id_shop).subscribe((response:any) =>
      {
        // console.log(response);
        this.products=response.products;
      },error=>{
        console.log(error);
      });
    },error=>{
      console.log(error);
    }
  );
  }

}
