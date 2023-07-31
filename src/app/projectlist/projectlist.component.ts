import { Component } from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent {

  id!:any;
  projects:any;
  isDelete=false;
message!:String;
updateProject(id:any){}
deleteProject(id:any){}
}
