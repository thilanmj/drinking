import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getDrinks(): Observable<any> {
    const url = API_URL+'1/filter.php?a=Alcoholic';
    return this.http
      .get<any>(url);
  }

  getDrink(id: string): Observable<any> {
    const url = API_URL+'1/lookup.php?i='+id;
    return this.http
      .get<any>(url);
  }
}
