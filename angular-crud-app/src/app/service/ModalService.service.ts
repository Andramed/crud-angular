import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data, Employee } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
	private _modalData = new BehaviorSubject<Employee |  null>(null);
	private _showModal = new BehaviorSubject<boolean>(false);

	modalData$ = this._modalData.asObservable();
	showModal$ = this._showModal.asObservable()

	constructor() { }

	toggleModal() {
		this._showModal.next(!this._showModal.value);
	}
	getData(data: Employee | null) {
		console.log('este chemat service si primeste data:', data);
		this._modalData.next(data);
		console.log(this.modalData$ , 'aici dupa ideee ar fi trebuit sa fie data pentru modal window');
		
	}
}
