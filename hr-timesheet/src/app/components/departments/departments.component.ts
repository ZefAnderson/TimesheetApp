import { Component } from '@angular/core';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  departments!: Department[];

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe(departments => {
      this.departments = departments;
  });  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
