import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import mongoose from 'mongoose';
import { BehaviorSubject, filter, Subscription, tap, catchError, of } from 'rxjs';
import { IUser } from '../shared/interfaces';


@Injectable({
  providedIn: 'root'
})
// export class AuthService {
//   user: IUser | null = null;

//   isLoggedIn() {
//     return this.user !== null;
//   }

//   constructor() { }
// }
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined));

  user: IUser | null = null;

  isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  register(username: string, firstName: string, lastName: string, password: string, rePassword: string, tel: string) {
    return this.http.post<IUser>('/auth/register', { username, firstName, lastName, password, rePassword, tel })
      .pipe(tap(user => this.user$$.next(user)));
  }

  // register(username: string, firstName: string, lastName: string, password: string, rePassword: string, tel: string) {
  //   return this.http.post('/auth/register', { username, firstName, lastName, password, rePassword, tel })
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }


  login(username: string, password: string) {
    return this.http.post<any>('/auth/login', { username, password })
      .pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.http.post<void>('/api/logout', {})
      .pipe(tap(user => this.user$$.next(null)));
  }

  // getProfile() {
  //   return this.http.get<IUser>('/api/users/profile')
  //     .pipe(tap(user => this.user$$.next(user)),
  //       catchError((err) => {
  //         this.user$$.next(null);
  //         return of(err);
  //       })
  //     );
  // }
  getUsers() {
    return mongoose.Schema.name
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

