import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgLog: string[] = [];
  constructor() { }

  add(msg: string) {
    this.msgLog.push(msg);
  }

  clear() {
    this.msgLog = [];
  }

  get() {
    return this.msgLog;
  }
}
