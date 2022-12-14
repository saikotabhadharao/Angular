import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
  <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  message:string="Hello World!";

  
  @Output() messageEvent=new EventEmitter<string>();

  constructor() { }
  sendMessage(){
    this.messageEvent.emit(this.message);
  }
  

}
