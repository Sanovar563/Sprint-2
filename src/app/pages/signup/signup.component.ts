import { Component, OnInit } from '@angular/core';
// import { HrService } from 'src/app/services/hr.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
constructor(private userService: UserService){}
public user={
  username: '',
  password: '',

};
ngOnInit(): void{}

formSubmit()
{
  console.log(this.user);
  if(this.user.username=='' || this.user.username ==null)
  {
    alert('hr is Required !!');
    return;
  }
  //adduser:userservice

  this.userService.createUser(this.user).subscribe(
    (data)=>{
      //success
      console.log(data);
      alert('success');
    },
    (error)=>{
      //error
      console.log(error);
      alert('wrong');
    }
  );
}
//this.user
}

