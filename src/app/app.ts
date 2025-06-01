import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserForm } from './components/user-form/user-form';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule, UserForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
