import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { Account } from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private msgServ: MessageService) { }

  ngOnInit() {
  }

  login (form: NgForm) {
    console.log(form.value);
    this.msgServ.add(`checking login with form values ${form.value.username}`);
    this.auth.checkLogin(form);
  }
}
