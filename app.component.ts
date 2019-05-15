import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular' , 'React' , 'Vue'];
  topicHasError= true;
  submitted = false; 
  errMsg ="";

  userModel = new User  ( 'Rob' , 'rob@test.com',5566894454 ,'default','morning', true); 
  constructor( private _enrollmentService : EnrollmentService){}


validateTopic(value){
  if(value=="default"){
    this.topicHasError= true;
  }
  else{
    this.topicHasError = false;
  }
}

OnSubmit(){
  this.submitted= true;
  this._enrollmentService.enroll(this.userModel)
   .subscribe(
     data=> console.log('Success!' , data),
    //  error=> console.log('Error!!' , error)
    error=> this.errMsg = error.statusText
   )
}


}
