import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Stock } from "./stock";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }

    public stocks: Stock[] = [];
    private headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    loadStock(): Observable<Stock[]> {
        return this.http.get("/api/stock")
            .pipe(map((data: any[]) => {
                this.stocks = data;
                return this.stocks;
            }));
    }

    getStockDetails(symbol: string): Observable<Stock[]> {
        return this.http.get("/api/stock/" + symbol)
            .pipe(map((data: Stock[]) => {
                this.stocks = data.map(res=> new Stock(res.close, res.date, res.high, res.low, res.open, res.symbol, res.volume));
                return this.stocks;
            }));
    }

    //addNewMovie(movie: string): Observable<Movie> {
    //    return this.http.post("/api/movie", movie, this.headers)
    //        .pipe(map((data: any) => {
    //            return data;
    //        }));
    //}

    //loadPerson(person: string): Observable<Person[]> {
    //    return this.http.get("/api/" + person)
    //        .pipe(map((data: any) => {
    //            return data;
    //        }));
    //}

    //addNewPerson(postData: string): Observable<Person> {
    //    return this.http.post("api/movie/AddPerson", postData, this.headers)
    //        .pipe(map((data: any) => {
    //            return data;
    //        }));
    //}

    //updateExistingPerson(postData: string): Observable<Person> {
    //    return this.http.post("api/movie/UpdatePerson", postData, this.headers)
    //        .pipe(map((data: any) => {
    //            return data;
    //        }));
    //}
}