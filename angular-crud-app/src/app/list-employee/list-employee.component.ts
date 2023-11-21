import { Component, AfterViewInit, ViewChild  } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Employee } from '../interface/data';
import { DataService } from '../service/data.service';
import { EmployeeComponent } from './employee/employee.component';
import { ActionsBtnComponent } from './actions-btn/actions-btn.component';
import { EditDialogWindowComponent } from './edit-dialog-window/edit-dialog-window.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
  imports: [EditDialogWindowComponent, EmployeeComponent, MatTableModule, MatPaginatorModule, ActionsBtnComponent],
 standalone: true
})
export class ListEmployeeComponent implements AfterViewInit {
    USERS!: Employee[];
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'actions'];
    dataSource = new MatTableDataSource<Employee>(this.USERS);
	
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private data_service: DataService) {}

    ngAfterViewInit() {
        this.data_service.getAllUser().subscribe({
            next: (res) => {
                this.USERS = res;
                console.log(this.USERS);
                this.dataSource = new MatTableDataSource<Employee>(this.USERS);
                this.dataSource.paginator = this.paginator;
            }
        })
    }
}

