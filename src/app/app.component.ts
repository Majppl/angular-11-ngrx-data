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
  isEdit = false;
  strStatus: string = '';
  frmEmp: Employee = {
    _id: 0,
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
    if (this.isEdit) {
      this.isEdit = false;
      this.employeeService
        .update(this.frmEmp)
        .subscribe(() => (this.strStatus = 'Updated'));
    } else {
      this.employeeService
        .add(this.frmEmp)
        .subscribe(() => (this.strStatus = 'Saved'));
    }
  }
  edit(empid) {
    this.isEdit = true;
    this.employeeService
      .getByKey(empid)
      .subscribe((emp) => Object.assign(this.frmEmp, emp));
  }
  delete(empid) {
    this.employeeService.getByKey(empid).subscribe((emp) => {
      Object.assign(this.frmEmp, emp);
      this.employeeService.delete(this.frmEmp);
    });
  }
}
