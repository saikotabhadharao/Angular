import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  id=0;
  name='';
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((param)=>{
      const variable=param;
        this.id=variable['Id'];
        this.name=variable['firstName'];
    })
   }

  ngOnInit(): void {
  }

}
