import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  return: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  private dbUrl = 'api/accounts';
  private _isLoggedIn = false;

  get isLoggedIn () {
    return this._isLoggedIn;
  }

  checkLogin (form: NgForm) {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/new');
    const username = form.value.username;
    const password = form.value.password;
    const promise = new Promise((resolve, reject) => {
      this.http.get<Account[]>(this.dbUrl).toPromise()
      .then(
        res => {
          for (let i = 0; i < res.length; i++) {
            if (username === res[i].username) {
              // console.log('username match');
              if (password === res[i].password) {
                // console.log('password match');
                this._isLoggedIn = true;
                this.router.navigateByUrl(this.return);
              }
            }
          }
        }
      );
    });
  }

  logout () {
    this._isLoggedIn = false;
  }
}
