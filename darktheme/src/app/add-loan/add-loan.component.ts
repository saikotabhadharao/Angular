import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class AddLoanComponent implements OnInit {
  id=0;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe((parameters)=>{
      this.id=parameters['id'];
    })
   }

  ngOnInit(): void {
  }

}
