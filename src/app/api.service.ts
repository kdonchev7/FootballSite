import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IUser } from './shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: any;
  constructor(private httpClient: HttpClient) { }

  loadData() {
    this.httpClient.get(`${apiUrl}/post`).subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }

  registerUser(username: string, firstName: string, lastName: string, password: string, rePassword: string, tel: string) {
    this.httpClient.post(`${apiUrl}/auth/register`, { username, firstName, lastName, password, rePassword, tel }).subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }

  createGame (title: string, description: string, place: string, date: string, peopleNeeded: number, imgUrl: string) {
    this.httpClient.post(`${apiUrl}/create`, { title, description, place, date, peopleNeeded, imgUrl }).subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }
  
  // loadPosts(limit?: number) {
  //   return this.httpClient.get<IPost[]>(`${apiUrl}/posts${limit ? `limit=${limit}` : ``}`)
  // }
}

