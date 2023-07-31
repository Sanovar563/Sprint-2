import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

id!:any;
  employees:any;
  isDelete=false;
message!:String;
updateEmployee(id:any){}
deleteEmployee(id:any){}
}
