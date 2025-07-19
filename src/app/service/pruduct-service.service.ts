import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class PruductServiceService {

  /// model object filling data

  product:Product[]=[

     { id:1,
      category_id:1,
      name:"shampo",
      price:25 ,description
      :" When the first paper volume of Knuth's The Art of ",
      img:'image/shampo.jpeg',

    },
    {id:2,
      category_id:1,
      name:"shampo",
      price:25 ,description
      :" When the first paper volume of Knuth's The Art of ",
      img:'image/condition.jpeg'

    },
    {id:3,
      category_id:2,
      name:"shampo",
      price:25 ,description
      :" When the first paper volume of Knuth's The Art of ",
       
      img:'image/perphum.jpeg'

    },
    {id:4,
      category_id:2,
      name:"shampo",
      price:25 ,description
      :" When the first paper volume of Knuth's The Art of ",
      img:'image/prushs.jpeg'

    },

  ]

/// model object category fill data

  category:Category[]=[
    {id:1,name:'beauty'},
    
    {id:2,name:'clothes'}
  ];

  // service functions  for category
  getall(){
    return(this.category)
  }
  getbyid(id:number){
    return(this.product.filter(p=>p.id==id))
  }
  getcategory_id( id:number){
    return(this.product.filter(p=>p.category_id==id))

  }


  constructor() { }
}
