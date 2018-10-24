import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  return: string;
  constructor(
    private http: HttpClient,
    private msgServ: MessageService,
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
    console.log(`checkLogin: username is ${username}`);
    const password = form.value.password;
    console.log(`checkLogin: username is ${password}`);
    const promise = new Promise((resolve, reject) => {
      this.http.get<Account[]>(this.dbUrl).toPromise()
      .then(
        res => {
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
            if (username === res[i].username) {
              console.log('username match');
              if (password === res[i].password) {
                console.log('password match');
                this._isLoggedIn = true;
                this.router.navigateByUrl(this.return);
              }
            }
          }
        }
      );
    });
    /* .pipe(
      tap(accounts => {
        for (let i = 0; i < accounts.length; i++) {
          console.log(accounts[i]);
          if (username === accounts[i].username) {
            console.log('username match');
            if (password === accounts[i].password) {
              console.log('password match');
              this._isLoggedIn = true;
            }
          }
          console.log('no match');
        }
      })
    ); */
  }
}
