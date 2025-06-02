import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form';

@Component({
  selector: 'app-user-form',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm implements OnInit{
 
  form!:FormGroup;

  constructor(private formService:FormService){}

  ngOnInit(){
    this.form = this.formService.initForm()
  }

 
  save(): void {
    this.formService.saveForm(this.form);
  }
   
  }

