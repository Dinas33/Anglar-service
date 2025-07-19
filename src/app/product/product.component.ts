import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PruductServiceService } from '../service/pruduct-service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor( private serv:PruductServiceService,private rout:ActivatedRoute){}
  product:Product[]=[]
  ngOnInit(): void {
    this.rout.params.subscribe(params=>{
      this.product=this.serv.getcategory_id(+params['id'])


    })
    
    
  }


}
