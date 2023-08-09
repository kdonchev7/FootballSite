import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.scss']
})
export class NewMatchComponent {

  @ViewChild(
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private authService: AuthService, private apiService: ApiService) {
    if (!this.authService.user){
      this.router.navigate(['/auth/login'])
    }
  }

  createGameHandler(form: NgForm): void {
    if (form.invalid) {
      console.log('failed creation');
      return;
    }
    const { title, description, place, date, peopleNeeded, imgUrl } = form.value;
    this.apiService.createGame(title, description, place, date, peopleNeeded, imgUrl)
    console.log(form.value);

  }
}
