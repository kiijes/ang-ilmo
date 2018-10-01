import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent implements OnInit {
  constructor(private msgServ: MessageService) { }

  ngOnInit() {
  }

}
