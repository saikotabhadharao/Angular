import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id=0;
  name='';
  //checking dirty component
  dirty=true;
  constructor(private activatedRoute:ActivatedRoute ) {
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.id=param['id'];
      this.name=param['name'];
    })
   }

  ngOnInit(): void {
  }

}
