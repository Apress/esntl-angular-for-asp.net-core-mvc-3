import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Repository } from '../models/repository';
import { filter } from "rxjs/operators";

@Injectable()
export class NavigationService {

    constructor(private repository: Repository, private router: Router,
            private active: ActivatedRoute) {
        router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(ev => this.handleNavigationChange());
    }

    private handleNavigationChange() {
        let active = this.active.firstChild.snapshot;
        if (active.url.length > 0 && active.url[0].path === "store") {
            if (active.params["categoryOrPage"] !== undefined) {
                let value = Number.parseInt(active.params["categoryOrPage"]);
                if (!Number.isNaN(value)) {
                    this.repository.filter.category = "";
                    this.repository.paginationObject.currentPage = value;
                } else {
                    this.repository.filter.category 
                        = active.params["categoryOrPage"];
                    this.repository.paginationObject.currentPage = 1;
                }
            } else {
                let category = active.params["category"];
                this.repository.filter.category = category || "";
                this.repository.paginationObject.currentPage
                    = Number.parseInt(active.params["page"]) || 1
            }
            this.repository.getProducts();
        }
    }

    get categories(): string[] {
        return this.repository.categories;
    }

    get currentCategory(): string {
        return this.repository.filter.category;
    }

    set currentCategory(newCategory: string) {
        this.router.navigateByUrl(`/store/${(newCategory || "").toLowerCase()}`);
    }

    get currentPage(): number {
        return this.repository.paginationObject.currentPage;
    }

    set currentPage(newPage: number) {
        if (this.currentCategory === "") {
            this.router.navigateByUrl(`/store/${newPage}`);
        } else {
            this.router.navigateByUrl(`/store/${this.currentCategory}/${newPage}`);
        }
    }

    get productsPerPage(): number {
        return this.repository.paginationObject.productsPerPage;
    }

    get productCount(): number {
        return (this.repository.products || []).length;
    }
}
