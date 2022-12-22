import { Component, OnInit, VERSION } from '@angular/core';
import { EntityCollectionService } from '@ngrx/data';
import { EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Employee } from './store/employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  strStatus: string = '';
  frmEmp: Employee = {
    empid: 0,
    empname: '',
    empskillset: '',
  };
  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.employeeService = serviceFactory.create('Employee');
    this.allEmployees = this.employeeService.entities$;
  }
  employeeService: EntityCollectionService<Employee>;
  allEmployees: Observable<Employee[]>;
  ngOnInit() {
    this.employeeService.getAll();
  }

  save() {
    this.employeeService
      .add(this.frmEmp)
      .subscribe(() => (this.strStatus = 'Saved'));
  }
}
