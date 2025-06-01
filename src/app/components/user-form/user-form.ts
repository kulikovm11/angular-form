import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm implements OnInit{
 
  form!:FormGroup;

  ngOnInit(){
    this._initForm()
  }

  _initForm():void{
    const PATTERN = /^[a-zA-Z]{3,50}$/;
    this.form = new FormGroup({
      firstname: new FormControl(null, [Validators.pattern(PATTERN), Validators.required]),
      lastname: new FormControl(null, [Validators.pattern(PATTERN), Validators.required]),
      streetAddress: new FormControl(null,[Validators.pattern(/^[a-zA-Z0-9 .,-]{3,50}$/), Validators.required]),
      streetAddressLine:new FormControl(null,[Validators.pattern(/^[a-zA-Z0-9 .,-]{3,50}$/), Validators.required]),
      city: new FormControl(null, [Validators.pattern(PATTERN), Validators.required]),
      state: new FormControl(null, [Validators.pattern(PATTERN), Validators.required]),
      zipCode: new FormControl(null, [Validators.pattern(/^\d{3,10}$/), Validators.required]),
      phoneNumber:new FormControl(null, [Validators.pattern(/^\+?[0-9\s\-()]{9,20}$/), Validators.required]),
      email:new FormControl(null, [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required, Validators.email]),
    })
  }
  save():void{
    if (this.form.valid) {
      console.log(this.form.getRawValue())
      this.form.reset()
    } else {
      console.error('Form is invalid');
      Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control?.errors) {
        console.log(`${field} errors:`, control.errors);
      }
    });
  
    }
   
  }
}
