import { Component,OnDestroy,OnInit} from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-parent',
  template:`
   {{ message }}
  `,

  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy{

  
  message:any;
  subscription: any;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
  

 
  

}
