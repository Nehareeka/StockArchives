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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var stock_1 = require("./stock");
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
            .pipe(operators_1.map(function (data) {
            _this.stocks = data;
            return _this.stocks;
        }));
    };
    DataService.prototype.getStockDetails = function (symbol) {
        var _this = this;
        return this.http.get("/api/stock/" + symbol)
            .pipe(operators_1.map(function (data) {
            _this.stocks = data.map(function (res) { return new stock_1.Stock(res.close, res.date, res.high, res.low, res.open, res.symbol, res.volume); });
            return _this.stocks;
        }));
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map