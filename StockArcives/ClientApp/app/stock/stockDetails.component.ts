import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../Shared/dataService";
import { ActivatedRoute, Router } from '@angular/router';
import { StockChart } from '@syncfusion/ej2-charts';
//import { chartData } from './indicator-data';
import { DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries } from '@syncfusion/ej2-charts';
import { RangeTooltip, Tooltip, ColumnSeries, Crosshair } from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries);


StockChart.Inject(RangeTooltip, Tooltip, Crosshair, ColumnSeries);

@Component({
    selector: "stock-detail",
    templateUrl: "stockDetails.component.html"
})
export class StockDetailsComponent implements OnInit {
    symbol: string;
    chartData: any;
    constructor(private data: DataService, private _route: ActivatedRoute, private _router: Router) {
    }
    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.symbol = params['symbol'];
        });
        this.data.getStockDetails(this.symbol)
            .subscribe(result => {
                this.chartData = result;
                this.createChart();
            });
    }
    createChart() {
        let stockChart: StockChart = new StockChart({
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
    }

    onBack(): void {
        this._router.navigate(['/index']);
    }

   
}