import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from "./navigation.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [Repository, NavigationService]
})
export class ModelModule {}
