import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  constructor(
    private regServ: RegisterService) { }

  ngOnInit() {
    if (localStorage.getItem('regs') !== 'undefined') {
      // this.regsArray = JSON.parse(localStorage.getItem('regs'));
      this.regServ.setRegs(JSON.parse(localStorage.getItem('regs')));
    }
  }

  addReg(form: NgForm) {
    if (form.invalid) {
      // console.log('invalid form');
      return;
    }
    this.regServ.pushReg(this.regServ.createReg(form));
    localStorage.setItem('regs', JSON.stringify(this.regServ.getRegs()));
  }

}
