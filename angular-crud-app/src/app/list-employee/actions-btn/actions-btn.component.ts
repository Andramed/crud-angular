import { Component, Input } from '@angular/core';
import { Data, Employee } from 'src/app/interface/data';
import { ModalService } from 'src/app/service/ModalService.service';
import { DataService } from 'src/app/service/data.service';

interface Error {
	status: number,
	message: string
}

@Component({
  selector: 'actions-btn',
  templateUrl: './actions-btn.component.html',
  styleUrls: ['./actions-btn.component.scss'],
  standalone: true
})
export class ActionsBtnComponent {

	@Input() idElement!: string;

	constructor(
		private data_service: DataService, 
		private modalService: ModalService
	) {}

	edit(id: string) {
		console.log('edit clicked', id);
		
		this.data_service.getSelectedUser(id).subscribe({
			next: (res) => {
				if (res.status == 200) {
					this.modalService.getData(res.body)
					this.modalService.toggleModal() // aici are loc statul la toogle
				}				
			},
			error: (err: Error) => {
				console.log(err.message);
			}
		});
	}
	
	view(id: string) {
		console.log('view clicked', id);
	}
	delete(id: string) {
		console.log('delete clicked', id);
	}

	openModalWindowEditUser(userData: Employee | Data) {
		console.log('user obtained:');
		
	}

}
