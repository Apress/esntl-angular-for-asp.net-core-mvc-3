import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from "./navigation.service";
import { Cart } from "./cart.model";
import { Order } from './order.model';

@NgModule({
    imports: [HttpClientModule],
    providers: [Repository, NavigationService, Cart, Order]
})
export class ModelModule {}
