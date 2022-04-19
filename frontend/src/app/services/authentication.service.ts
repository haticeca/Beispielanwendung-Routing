import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userRoute = 'http://localhost:3000/users';

  user!: User;
  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginUser(email: string, password: string): Observable<any>{
    return this.http.post<User>(this.userRoute + '/login/' + email, { password: password }).pipe(map(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }

  logout(): void {
    /*
    * localStorage.clear();
    * this.currentUserSubject = new BehaviorSubject<User>();
    * */
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    if(this.currentUserSubject)
    {
      return this.currentUserSubject.value.role === 'admin'
        ? true
        : false;
    }
    else {
      return false;
    }
  }

  isUser(): boolean {
    if(this.currentUserSubject)
    {
      return this.currentUserSubject.value.role === 'user'
        ? true
        : false;
    }
    else {
      return false;
    }
  }
}
