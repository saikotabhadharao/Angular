import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from'@angular/router'

@Component({
  selector: 'app-add-loans',
  templateUrl: './add-loans.component.html',
  styleUrls: ['./add-loans.component.css']
})
export class AddLoansComponent implements OnInit {
 

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  
  }

}
