import { Injectable } from '@angular/core';
import { Registration } from './registration';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  regsArray: Array<Registration>;
  private registrations = 0;
  constructor() {
  }

  createReg(form: NgForm): Registration {
    this.registrations++;
    return new Registration(
      this.registrations, form.value.name, form.value.email, form.value.foodlist, form.value.sauna);
  }

  setRegs(regsArr: Array<Registration>) {
    this.regsArray = regsArr;
  }

  getRegs(): Array<Registration> {
    return this.regsArray;
  }

  pushReg(reg: Registration) {
    if (!this.regsArray) {
      this.regsArray = [];
    }
    this.regsArray.push(reg);
  }

  clearRegs() {
    localStorage.clear();
    this.regsArray = [];
    this.registrations = 0;
  }
}
