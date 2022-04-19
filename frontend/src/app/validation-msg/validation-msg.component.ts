import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-msg',
  templateUrl: './validation-msg.component.html',
  styleUrls: ['./validation-msg.component.css']
})
export class ValidationMsgComponent implements OnInit {
  @Input() msg!: string;
  @Input() display!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
