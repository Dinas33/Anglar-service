import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PruductServiceService } from '../service/pruduct-service.service';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category-porducts',
  imports: [CommonModule,RouterModule],
  templateUrl: './category-porducts.component.html',
  styleUrl: './category-porducts.component.css'
})
export class CategoryPorductsComponent {
 constructor( private serv:PruductServiceService,private rout:ActivatedRoute){}
  product:Product[]=[]
  
  ngOnInit(): void {
    this.rout.params.subscribe(params=>{
      this.product=this.serv.getbyid(+params['id'])


    })
    
    
  }

  }



