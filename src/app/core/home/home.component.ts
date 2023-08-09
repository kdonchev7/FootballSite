import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  list: IUser | null = null;
  errorFetcingData = false;

  get isLoggedIn() {
    return this.authService.isLoggedIn()
  }

  constructor(private authService: AuthService, public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loadData();
  }
}