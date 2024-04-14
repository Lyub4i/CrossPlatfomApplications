import { AdministrativeStaff } from './AdministrativeStaff';
import { Employee } from './Employee';
import { Engineer } from './Engineer';
import { WorkerPerson } from './Worker';

describe('Employee test', () => {
  let engineer: Engineer;
  let worker: WorkerPerson;
  let adminStaff: AdministrativeStaff;
  let container: Employee[];

  beforeAll(() => {
    engineer = new Engineer(
      'Engineer 1',
      20,
      'IT department',
      'Software engineer'
    );
    worker = new WorkerPerson('Worker 1', 25, 'Workers department', 'Worker lead');
    adminStaff = new AdministrativeStaff(
      'AdminStaff 1',
      40,
      'VP department',
      'VP'
    );

    container = new Array<Employee>();
    container.push(engineer);
    container.push(worker);
    container.push(adminStaff);
  });

  it('Enginner was craete', () => {
    expect(engineer).toBeTruthy();
  });

  it('Worker was craete', () => {
    expect(worker).toBeTruthy();
  });

  it('AdministrativeStaff was craete', () => {
    expect(adminStaff).toBeTruthy();
  });

  it('Container exists 3 elements', () => {
    expect(container.length).toBe(3);
  });
});
