import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../Shared/dataService";
import { PagerService } from '../Shared/pager.service';
import { SortDirective } from '../directives/sort.directive';
import { Stock } from "../Shared/stock";

@Component({
    selector: "stock-list",
    templateUrl: "stockList.component.html",
    styleUrls: ["stockList.component.css"]
})
export class StockListComponent implements OnInit {
    
    constructor(private data: DataService, private _pagerService: PagerService) {
    }

    public stock: Stock[] = [];
    // paged items
    pagedItems: Stock[];
    public columns: Array<any> = [];
    // pager object
    pager: any = {};
    public config: any;

    ngOnInit(): void {
        this.data.loadStock()
            .subscribe(data => {
                    if (data) {
                        this.stock = data;
                        this.setPage(1);
                        this.initTable();
                    }
                }
            );  
    } 

    setPage(page: number, data: Stock[] = this.stock) {
        // get pager object from service
        this.pager = this._pagerService.getPager(data.length, page);

        // get current page of items
        this.pagedItems = data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    initTable() {
        const objectKeys = Object.keys(this.stock[0]) as Array<keyof Stock>;
        objectKeys.splice(0, 1);
        objectKeys.forEach((item: string) => {
            
                this.columns.push({
                    title: item, sort: ''
                });
        });
        this.config = {
            sorting: { columns: this.columns }
        };
    }

    public get configColumns(): any {
        let sortColumns: Array<any> = [];

        this.columns.forEach((column: any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });

        return { columns: sortColumns };
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].title;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    public onChangeTable(column: any): void {
        this.columns.forEach((col: any) => {
            if (col.title !== column.title) {
                col.sort = '';
            }
        });
        this.tableChanged({ sorting: this.configColumns });
    }

    public tableChanged(config: any) {
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        // let data = this.moviesInfo.slice(0);
        let sortedData = this.changeSort(this.stock, this.config);
        this.setPage(1, sortedData);
    }
}