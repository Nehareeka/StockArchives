"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var ngx_chips_1 = require("ngx-chips");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var stockList_component_1 = require("./stock/stockList.component");
var stockDetails_component_1 = require("./stock/stockDetails.component");
var dataService_1 = require("./Shared/dataService");
var pager_service_1 = require("./Shared/pager.service");
var route = [
    { path: "index", component: stockList_component_1.StockListComponent },
    { path: "detail/:symbol", component: stockDetails_component_1.StockDetailsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                stockList_component_1.StockListComponent,
                stockDetails_component_1.StockDetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(route, {
                    useHash: true
                    // enableTracing: true //for debugging of the routes
                }),
                forms_1.FormsModule,
                ngx_chips_1.TagInputModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [
                dataService_1.DataService,
                pager_service_1.PagerService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map