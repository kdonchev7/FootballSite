import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {

  get isLoggedIn() {
    return this.authService.isLoggedIn()
  }
  
  constructor (private router: Router, private authService: AuthService) {
  }
}
