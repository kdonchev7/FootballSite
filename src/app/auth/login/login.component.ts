import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild(
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.authService.user = {
      firstName: 'Pesho',
      lastName: 'Ivanov'
    } as any;

    this.router.navigate(['/all-games']);
  }

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      console.log('fail');
      return;
    }
    console.log(form.value);
    const { username, password } = form.value;
    this.authService.login(username!, password!)
      .subscribe(user => {
        // this.authService.user = user;
        this.router.navigate(['/all-games'])
      });

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}
