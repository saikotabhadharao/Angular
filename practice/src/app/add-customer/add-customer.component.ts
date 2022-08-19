import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  firstname:string="";
  bool:boolean=false;
  text:string='';
  list:string='';
  data={};


  constructor() { }

  ngOnInit(): void {
  }
  //set the values to form
  loadvalues(form:NgForm){
   let userdetails={
      firstname:'kotasai',
      bool:true,
      text:'my name is andekotasai',
      list:'nagendra'
    }
    form.setValue(userdetails);
    //console.log(this.data);
  }
  
 /*  loadvalues(form:NgForm){
   userdetails:{
     this. firstname='kotasai',
      this.bool=true,
      this.text='my name is andekotasai',
      this.list='nagendra'
    }
    form.setValue(this.details);
    //console.log(this.data);
  }*/
  
  details(form:NgForm){
    console.log(form.value['firstname']); //particular value in the object/dictionary
    console.log(form.value);  //all the values in the dictionary/object
    
    
    
  }
  resetform(form:NgForm){
   // form.reset();
   form.resetForm();
  }

}
