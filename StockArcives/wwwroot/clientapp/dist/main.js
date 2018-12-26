(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/Shared/dataService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/Shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock */ "./ClientApp/app/Shared/stock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.stocks = [];
        this.headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    DataService.prototype.loadStock = function () {
        var _this = this;
        return this.http.get("/api/stock")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.stocks = data;
            return _this.stocks;
        }));
    };
    DataService.prototype.getStockDetails = function (symbol) {
        var _this = this;
        return this.http.get("/api/stock/" + symbol)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.stocks = data.map(function (res) { return new _stock__WEBPACK_IMPORTED_MODULE_3__["Stock"](res.close, res.date, res.high, res.low, res.open, res.symbol, res.volume); });
            return _this.stocks;
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./ClientApp/app/Shared/pager.service.ts":
/*!***********************************************!*\
  !*** ./ClientApp/app/Shared/pager.service.ts ***!
  \***********************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./ClientApp/app/Shared/stock.ts":
/*!***************************************!*\
  !*** ./ClientApp/app/Shared/stock.ts ***!
  \***************************************/
/*! exports provided: Stock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
var Stock = /** @class */ (function () {
    function Stock(close, date, high, low, open, symbol, volume) {
        this.close = close;
        this.date = date;
        this.high = high;
        this.low = low;
        this.open = open;
        this.symbol = symbol;
        this.volume = volume;
        this.date = new Date(date);
    }
    return Stock;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stock-archive',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _stock_stockList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock/stockList.component */ "./ClientApp/app/stock/stockList.component.ts");
/* harmony import */ var _stock_stockDetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock/stockDetails.component */ "./ClientApp/app/stock/stockDetails.component.ts");
/* harmony import */ var _directives_sort_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/sort.directive */ "./ClientApp/app/directives/sort.directive.ts");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shared/dataService */ "./ClientApp/app/Shared/dataService.ts");
/* harmony import */ var _Shared_pager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Shared/pager.service */ "./ClientApp/app/Shared/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var route = [
    { path: "index", component: _stock_stockList_component__WEBPACK_IMPORTED_MODULE_6__["StockListComponent"] },
    { path: "detail/:symbol", component: _stock_stockDetails_component__WEBPACK_IMPORTED_MODULE_7__["StockDetailsComponent"] },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _stock_stockList_component__WEBPACK_IMPORTED_MODULE_6__["StockListComponent"],
                _stock_stockDetails_component__WEBPACK_IMPORTED_MODULE_7__["StockDetailsComponent"],
                _directives_sort_directive__WEBPACK_IMPORTED_MODULE_8__["SortDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(route)
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' },
                _Shared_dataService__WEBPACK_IMPORTED_MODULE_9__["DataService"],
                _Shared_pager_service__WEBPACK_IMPORTED_MODULE_10__["PagerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/directives/sort.directive.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/directives/sort.directive.ts ***!
  \****************************************************/
/*! exports provided: SortDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirective", function() { return SortDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortDirective = /** @class */ (function () {
    function SortDirective() {
        this.sortChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SortDirective.prototype, "config", {
        get: function () {
            return this.appSort;
        },
        set: function (value) {
            this.appSort = value;
        },
        enumerable: true,
        configurable: true
    });
    SortDirective.prototype.onToggleSort = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.appSort && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortDirective.prototype, "appSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortDirective.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortDirective.prototype, "sortChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SortDirective.prototype, "config", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event', '$target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SortDirective.prototype, "onToggleSort", null);
    SortDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSort]'
        })
    ], SortDirective);
    return SortDirective;
}());



/***/ }),

/***/ "./ClientApp/app/stock/stockDetails.component.html":
/*!*********************************************************!*\
  !*** ./ClientApp/app/stock/stockDetails.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <meta name=\"description\" content=\"Essential JS 2 TypeScript Components\" />\r\n    <meta name=\"author\" content=\"Syncfusion\" />\r\n    <link href=\"//cdn.syncfusion.com/ej2/fabric.css\" rel=\"stylesheet\" />\r\n    <script type=\"text/javascript\">\r\n        if (/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) {\r\n            document.write('<script src=\"https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.5.1/bluebird.min.js\"><\\/script>');\r\n        }\r\n    </script>\r\n</head>\r\n\r\n<body>\r\n<style>\r\n    body {\r\n        margin: 0;\r\n    }\r\n</style>\r\n<div><h2>Chart depicting stock details of {{symbol}}</h2></div>\r\n<div class=\"control-section\">\r\n    <div id=\"container\"></div>\r\n</div>\r\n<div class='panel-footer'>\r\n    <a class='btn btn-default' (click)='onBack()' style='width:80px'>\r\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back\r\n    </a>\r\n</div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./ClientApp/app/stock/stockDetails.component.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/stock/stockDetails.component.ts ***!
  \*******************************************************/
/*! exports provided: StockDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDetailsComponent", function() { return StockDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./ClientApp/app/Shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-charts */ "./node_modules/@syncfusion/ej2-charts/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { chartData } from './indicator-data';


_syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["StockChart"].Inject(_syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["DateTime"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["AreaSeries"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["CandleSeries"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["HiloOpenCloseSeries"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["HiloSeries"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["SplineSeries"]);
_syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["StockChart"].Inject(_syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["RangeTooltip"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["Crosshair"], _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]);
var StockDetailsComponent = /** @class */ (function () {
    function StockDetailsComponent(data, _route, _router) {
        this.data = data;
        this._route = _route;
        this._router = _router;
    }
    StockDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.symbol = params['symbol'];
        });
        this.data.getStockDetails(this.symbol)
            .subscribe(function (result) {
            _this.chartData = result;
            _this.createChart();
        });
    };
    StockDetailsComponent.prototype.createChart = function () {
        var stockChart = new _syncfusion_ej2_charts__WEBPACK_IMPORTED_MODULE_3__["StockChart"]({
            chartArea: { border: { width: 0 } },
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            primaryYAxis: {
                lineStyle: { color: 'transparent' },
                majorTickLines: { color: 'transparent', width: 0 }
            },
            series: [
                {
                    dataSource: this.chartData,
                    type: 'HiloOpenClose',
                    bearFillColor: '#00226C',
                    bullFillColor: "#0450C2",
                    fill: 'blue'
                },
            ],
            border: { width: 0 },
            crosshair: { enable: true },
            tooltip: { enable: true },
            enablePeriodSelector: false,
            height: '350',
        });
        stockChart.appendTo('#container');
    };
    StockDetailsComponent.prototype.onBack = function () {
        this._router.navigate(['/index']);
    };
    StockDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "stock-detail",
            template: __webpack_require__(/*! ./stockDetails.component.html */ "./ClientApp/app/stock/stockDetails.component.html")
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockDetailsComponent);
    return StockDetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/stock/stockList.component.css":
/*!*****************************************************!*\
  !*** ./ClientApp/app/stock/stockList.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n}\r\n\r\nli {\r\n    display: block;\r\n    line-height: 30px;\r\n}\r\n\r\n.description {\r\n    font-size: 16px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.pagination {\r\n    display: inline-flex;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/stock/stockList.component.html":
/*!******************************************************!*\
  !*** ./ClientApp/app/stock/stockList.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n\r\n    </div>\r\n    <div class='panel-body'>\r\n\r\n\r\n        <div class='table-responsive'>\r\n            <table class='table'>\r\n                <thead>\r\n                <tr>\r\n                    <th *ngFor=\"let column of columns\" [appSort]=\"config\" [column]=\"column\" (sortChanged)=\"onChangeTable($event)\">\r\n                        {{column.title | titlecase}}\r\n                        <i class=\"fa\" [ngClass]=\"{'fa-angle-down': column.sort === 'desc', 'fa-angle-up': column.sort === 'asc'}\"></i>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor='let stock of pagedItems'>\r\n                    <td>\r\n                        <a [routerLink]=\"['/detail',stock.symbol]\">{{ stock?.symbol }}</a>\r\n                    </td>\r\n                    <td>{{ stock?.date | date:'mediumDate'}}</td>\r\n                    <td>{{ stock?.open }}</td>\r\n                    <td>{{ stock?.close }}</td>\r\n                    <td>{{ stock?.low }}</td>\r\n                    <td>{{ stock?.high }}</td>\r\n                    <td>{{ stock?.volume | number:'7.0-0'}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"text-center\">\r\n\r\n    <!-- pager -->\r\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n            <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n        </li>\r\n        <li *ngFor=\"let page of pager.pages\" class=\"page-item\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n            <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n        </li>\r\n        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/stock/stockList.component.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/stock/stockList.component.ts ***!
  \****************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/dataService */ "./ClientApp/app/Shared/dataService.ts");
/* harmony import */ var _Shared_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/pager.service */ "./ClientApp/app/Shared/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockListComponent = /** @class */ (function () {
    function StockListComponent(data, _pagerService) {
        this.data = data;
        this._pagerService = _pagerService;
        this.stock = [];
        this.columns = [];
        // pager object
        this.pager = {};
    }
    StockListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadStock()
            .subscribe(function (data) {
            if (data) {
                _this.stock = data;
                _this.setPage(1);
                _this.initTable();
            }
        });
    };
    StockListComponent.prototype.setPage = function (page, data) {
        if (data === void 0) { data = this.stock; }
        // get pager object from service
        this.pager = this._pagerService.getPager(data.length, page);
        // get current page of items
        this.pagedItems = data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    StockListComponent.prototype.initTable = function () {
        var _this = this;
        var objectKeys = Object.keys(this.stock[0]);
        objectKeys.splice(0, 1);
        objectKeys.forEach(function (item) {
            _this.columns.push({
                title: item, sort: ''
            });
        });
        this.config = {
            sorting: { columns: this.columns }
        };
    };
    Object.defineProperty(StockListComponent.prototype, "configColumns", {
        get: function () {
            var sortColumns = [];
            this.columns.forEach(function (column) {
                if (column.sort) {
                    sortColumns.push(column);
                }
            });
            return { columns: sortColumns };
        },
        enumerable: true,
        configurable: true
    });
    StockListComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].title;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    StockListComponent.prototype.onChangeTable = function (column) {
        this.columns.forEach(function (col) {
            if (col.title !== column.title) {
                col.sort = '';
            }
        });
        this.tableChanged({ sorting: this.configColumns });
    };
    StockListComponent.prototype.tableChanged = function (config) {
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        // let data = this.moviesInfo.slice(0);
        var sortedData = this.changeSort(this.stock, this.config);
        this.setPage(1, sortedData);
    };
    StockListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "stock-list",
            template: __webpack_require__(/*! ./stockList.component.html */ "./ClientApp/app/stock/stockList.component.html"),
            styles: [__webpack_require__(/*! ./stockList.component.css */ "./ClientApp/app/stock/stockList.component.css")]
        }),
        __metadata("design:paramtypes", [_Shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _Shared_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], StockListComponent);
    return StockListComponent;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Practice\StockArcives\StockArcives\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map