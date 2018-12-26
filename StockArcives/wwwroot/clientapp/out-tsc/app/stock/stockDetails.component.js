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
var router_1 = require("@angular/router");
var ej2_charts_1 = require("@syncfusion/ej2-charts");
//import { chartData } from './indicator-data';
var ej2_charts_2 = require("@syncfusion/ej2-charts");
var ej2_charts_3 = require("@syncfusion/ej2-charts");
ej2_charts_1.StockChart.Inject(ej2_charts_2.DateTime, ej2_charts_2.AreaSeries, ej2_charts_2.CandleSeries, ej2_charts_2.HiloOpenCloseSeries, ej2_charts_2.HiloSeries, ej2_charts_2.LineSeries, ej2_charts_2.SplineSeries);
ej2_charts_1.StockChart.Inject(ej2_charts_3.RangeTooltip, ej2_charts_3.Tooltip, ej2_charts_3.Crosshair, ej2_charts_3.ColumnSeries);
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
        var stockChart = new ej2_charts_1.StockChart({
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
        core_1.Component({
            selector: "stock-detail",
            templateUrl: "stockDetails.component.html"
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.ActivatedRoute, router_1.Router])
    ], StockDetailsComponent);
    return StockDetailsComponent;
}());
exports.StockDetailsComponent = StockDetailsComponent;
//# sourceMappingURL=stockDetails.component.js.map