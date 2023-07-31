import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

const routes: Routes = [
  {path: 'signup',
  component: SignupComponent,
  pathMatch: 'full',
},
    {path: 'createemployee', component: CreateemployeeComponent},
    {path: 'employeelist', component: EmployeelistComponent},
    {path: 'createproject', component: CreateprojectComponent},
    {path: 'projectlist', component: ProjectlistComponent},
    {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
