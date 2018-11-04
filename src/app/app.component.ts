import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   @ViewChild('f') signupForm: NgForm;
   defaultValue = 'pet'; 

   answer = '';
   genders = ['male', 'female'];

   user = {
   	username: 'aaa',
   	email: '',
   	secret: '',
   	questionAnswer: '',
   	gender: ''
   }

   submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    // 	userdata: {
    // 		username: suggestedName,
    // 		email: ''
    // 	},
    // 	secret: 'pet',
    // 	quetionAnswer: '',
    // 	gender: 'male'

    // });

    this.signupForm.form.patchValue({
    	userdata:{
    		username: suggestedName
    	}
    });
  }

  // onSubmit( form : NgForm){
  //    console.log(form);
  // }

  onSubmit(){
  	this.submitted = true;
    
    this.user.username = this.signupForm.value.userdata.username;
    this.user.email = this.signupForm.value.userdata.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.quetionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
