import { Component, OnInit } from '@angular/core';

interface Employee {
  name: string;
  firstName: string;
  email: string;
  // Ajoutez d'autres propriétés si nécessaire
}

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {
  newEmployee: Employee = { name: '', firstName: '', email: '' };


  constructor() { }
  createEmployee(){
    
  }


  ngOnInit() {
  }

}
