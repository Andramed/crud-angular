import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, throwError} from 'rxjs'
import { Data, Employee } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	apiUrl = "http://localhost:3000/";
	constructor(private http: HttpClient) { }

	getAllUser(): Observable<Employee[]> {
		console.log('make query for all users');
		return this.http.get<Employee[]>(`${this.apiUrl}users`);
	};

	postNewEmployee(newEmployee: Object): Observable<Data> {
		console.log('cereree post se executa');
		return this.http.post<Data>(`${this.apiUrl}users`, newEmployee)
	};
	
	getSelectedUser(USER_ID: string): Observable<HttpResponse<Employee>> {
		console.log('Get user with id: ', USER_ID);
		return this.http.get<Employee>(`${this.apiUrl}users/${USER_ID}`, {
			observe: 'response'
		}).pipe(
			catchError(error  => {
				throw({
					"message": error.error.message,
					"status": error.status
				});
			})
		)
	}
	

}
