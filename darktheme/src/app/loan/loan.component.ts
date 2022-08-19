import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  id=0;
  name='';
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((param)=>{
    this.id=param['id'];
    this.name=param['name'];
    })
   }

  ngOnInit(): void {
  }

}
