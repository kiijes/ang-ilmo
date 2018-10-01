import { Injectable } from '@angular/core';
import { Registration } from './registration';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  regsArray: Array<Registration>;
  private registrations = 0;
  constructor(private msgServ: MessageService) {
  }

  createReg(form: NgForm): Registration {
    this.registrations++;
    this.msgServ.add('Created registration');
    return new Registration(
      this.registrations, form.value.name, form.value.email, form.value.foodlist, form.value.sauna);
  }

  setRegs(regsArr: Array<Registration>) {
    this.regsArray = regsArr;
    this.msgServ.add('Set regs to regsArray');
  }

  getRegs(): Array<Registration> {
    this.msgServ.add('Got registrations');
    return this.regsArray;
  }

  pushReg(reg: Registration) {
    if (!this.regsArray) {
      this.regsArray = [];
    }
    this.regsArray.push(reg);
    this.msgServ.add(`reg for user ${reg.name} added`);
  }

  clearRegs() {
    localStorage.clear();
    this.regsArray = [];
    this.registrations = 0;
    this.msgServ.add('cleared regs');
  }
}
