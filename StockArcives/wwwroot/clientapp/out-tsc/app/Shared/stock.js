"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Stock = Stock;
//# sourceMappingURL=stock.js.map