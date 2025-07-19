import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CategoryPorductsComponent } from './category-porducts/category-porducts.component';

export const routes:Routes=[

 {path:'detail/:id',component:CategoryPorductsComponent},
{path:'category',component:CategoryComponent},
{path:'category/:id',component:ProductComponent}

];
