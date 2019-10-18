import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
// import { ProductTableComponent } from "./structure/productTable.component"
// import { CategoryFilterComponent } from "./structure/categoryFilter.component"
// import { ProductDetailComponent } from "./structure/productDetail.component";
import { FormsModule } from '@angular/forms';
import { StoreModule } from "./store/store.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ModelModule,FormsModule, StoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
