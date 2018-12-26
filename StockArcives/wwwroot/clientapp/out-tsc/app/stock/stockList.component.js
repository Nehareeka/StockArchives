"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dataService_1 = require("../Shared/dataService");
var pager_service_1 = require("../Shared/pager.service");
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
            }
        });
    };
    StockListComponent.prototype.setPage = function (page, data) {
        if (data === void 0) { data = this.stock; }
        var objectKeys = Object.keys(data[0]);
        this.columns = objectKeys;
        this.columns.splice(0, 1);
        // get pager object from service
        this.pager = this._pagerService.getPager(data.length, page);
        // get current page of items
        this.pagedItems = data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    StockListComponent = __decorate([
        core_1.Component({
            selector: "stock-list",
            templateUrl: "stockList.component.html",
            styleUrls: ["stockList.component.css"]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, pager_service_1.PagerService])
    ], StockListComponent);
    return StockListComponent;
}());
exports.StockListComponent = StockListComponent;
//# sourceMappingURL=stockList.component.js.map