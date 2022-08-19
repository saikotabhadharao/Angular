import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';
import { userInterface } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public details:userInterface[]=[];
  constructor(private _userservice:UserService) { }

  ngOnInit() {
    this._userservice.getAllUsers()
    .subscribe(data=>this.details=data);
  }
}
