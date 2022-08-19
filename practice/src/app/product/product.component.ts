import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId=0;
  photoId=0;
  

  constructor( private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=>{
      const interValue=params;
      this.productId=interValue['Id'];
      this.photoId=interValue['photoId'];
      
    });
  }

  ngOnInit(): void {
  }

}
