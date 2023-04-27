import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UserLogin } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7009/api/";

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * login
   * @param user
   * @returns
   */
  public login(userLogin: UserLogin) {
    return this.http.post<User>(`${this.baseUrl}auth/login`, userLogin).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  public setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  public logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }

  /**
   * register
   * @param user
   * @returns
   */
  public register(user: User): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7009/api/Auth/register',
      user
    );
  }

  public getMe(): Observable<string> {
    return this.http.get('https://localhost:7009/api/Auth', {
      responseType: 'text',
    });
  }
}
