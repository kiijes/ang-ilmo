import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { RegisterService } from '../register.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-reg-list',
  templateUrl: './reg-list.component.html',
  styleUrls: ['./reg-list.component.css']
})
export class RegListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'food', 'sauna'];
  dataSource;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private regServ: RegisterService) { }

  ngOnInit() {
    if (localStorage.getItem('regs') !== 'undefined') {
      //this.regsArray = JSON.parse(localStorage.getItem('regs'));
      this.regServ.setRegs(JSON.parse(localStorage.getItem('regs')));
    }
    this.dataSource = this.regServ.getRegs();
  }

  clear() {
    this.regServ.clearRegs();
    this.dataSource = this.regServ.getRegs();
    this.table.renderRows();
  }

}
