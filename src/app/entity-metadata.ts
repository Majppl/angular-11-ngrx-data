import { EntityMetadataMap } from '@ngrx/data';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './store/employee';

const entityMetadata: EntityMetadataMap = {
  Employee: { selectId: (employee: Employee) => employee._id },
  Skillset: {},
};

// because the plural of "Employee" is not "Employees"
const pluralNames = { Employee: 'Employee', Skillset: 'Skillsets' };

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
