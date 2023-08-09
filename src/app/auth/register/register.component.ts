import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private apiService: ApiService) { 
    console.log(this.authService.getUsers())
  }

  registerHandler(): void {
    if (this.form.invalid) {
      console.log(this.authService.getUsers());
      console.log('fail register');
      return;
    }
    const { username, firstName, lastName, pass: { password, rePassword } = {}, tel } = this.form.value;
    this.authService.register(username!, firstName!, lastName!, password!, rePassword!, tel!)
      .subscribe(user => {
        this.router.navigate(['/all-games'])
      });
    console.log(this.form.value);

  }  
}
