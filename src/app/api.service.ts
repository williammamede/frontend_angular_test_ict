import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_ADRESS = "http://127.0.0.1:80";
  constructor(private httpClient: HttpClient) { }

  readData(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${this.SERVER_ADRESS}/get.php`);
  }
}
