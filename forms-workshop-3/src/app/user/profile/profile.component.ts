import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';

// <!-- [value]="profileDetails?.email" -->

interface Profile{
username: string,
email: string,
tel: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isEditMode: boolean = false;

profileDetails: Profile ={
  username: 'John', email: 'blabla@gmail.com', tel: '123123'
};

  form = this.fb.group({
    username:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel:['']
  })
  constructor(private fb: FormBuilder){}

  toggleEditMode(): void{
    this.isEditMode = !this.isEditMode
  }
  saveProfileHandler():void{
    if(this.form.invalid){
      return
    }
    this.profileDetails = {...this.form.value} as Profile;
    console.log(this.form.value);
    
    this.toggleEditMode();
  }
}