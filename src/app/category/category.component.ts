import { CommonModule } from '@angular/common';
import { CommaExpr, Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PruductServiceService } from '../service/pruduct-service.service';
import { Category } from '../model/category';


@Component({
  selector: 'app-category',
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  implements OnInit {
  constructor(private serve:PruductServiceService){}
  cats:Category[]=[];
  ngOnInit(): void {
    this.cats=this.serve.getall()
    
  }


}
