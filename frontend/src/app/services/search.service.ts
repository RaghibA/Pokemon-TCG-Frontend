import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseURL = 'http://localhost:4040'

  constructor(private http: HttpClient) { }

  // Query Cards
  cardSearchHandler(query: string): Observable<any> {
    return this.http.get(this.baseURL+'/search/'+query)
  }
}
