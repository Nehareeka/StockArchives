import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common'; 

import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stockList.component';
import { StockDetailsComponent } from './stock/stockDetails.component';

import { SortDirective } from './directives/sort.directive';

import { DataService } from './Shared/dataService';
import { PagerService } from './Shared/pager.service';

let route: Routes = [
    { path: "index", component: StockListComponent },
    { path: "detail/:symbol", component: StockDetailsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        StockListComponent,
        StockDetailsComponent,
        SortDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(route)
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        DataService,
        PagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
