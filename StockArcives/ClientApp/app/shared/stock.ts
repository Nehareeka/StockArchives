export class Stock {

    constructor(
        public close: number,
        public date: Date,
        public high: number,
        public low: number,
        public open: number,
        public symbol: string,
        public volume: number
    ) {
        this.date = new Date(date);
    }
}
