import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTableComponent } from "./structure/productTable.component"
import { ProductDetailComponent } from "./structure/productDetail.component";

const routes: Routes = [
    { path: "table", component: ProductTableComponent },
    { path: "detail", component: ProductDetailComponent },
    { path: "detail/:id", component: ProductDetailComponent },    
    { path: "", component: ProductTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
