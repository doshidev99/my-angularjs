import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { ProductComponent } from './components/product/product.component'
import { ProductdetailComponent } from './components/productdetail/productdetail.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
