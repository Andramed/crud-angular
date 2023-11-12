import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Data } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	apiUrl = "http://localhost:3000/test";
	constructor(private http: HttpClient) { }

	getMessage(): Observable<Data> {
		return this.http.get<Data>(this.apiUrl);
	}

}
