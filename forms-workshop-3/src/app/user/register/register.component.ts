import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form= this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: [''],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword:  ['', [Validators.required]],
    }, {
      validators: [matchPasswordsValidator('password','rePassword' )],
    })
   
  })
constructor(private fb: FormBuilder){}

register():void{
  if(this.form.invalid){
    return
  }
  
}
}
