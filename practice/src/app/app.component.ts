import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  myname="AndeKotasai";
  msg:any=false;
  new_msg=true;
  data=[
    {
      firstname:"Ande",
      lastname:"kotasai",
      gender:"male",
      age:21
    },
    {
      firstname:"Ande",
      lastname:"Nagendra",
      gender:"male",
      age:23
    },
    {
      firstname:"Ande",
      lastname:"Mavullingam",
      gender:"male",
      age:47
    },
    {
      firstname:"Ande",
      lastname:"peddintlamm",
      gender:"female",
      age:45
    }
  ]
  //ngSwitch for strings
  switch_msg="sai";

  //ngSwitch for numeric
  age=47


  //ng style in dynamic case
   color_name="yellow";

   //ng style based on condition

   value=2;

   class_property="c2";

   //ngClass with Condition Property
   class_value='c1';

   //ngClass with methodType
   getClass=()=>"c3";

   doOperation(){
    "Oneway binding";
   }

   //event binding

   execute(){
    console.log("this method is executing");
   }
   highlight(){
    console.log("highlight the statement");
   }
   newhighlight(){
    console.log("mouseleave to high light the statement")
   }
   focus(){
    console.log("while typing in text box it will focus");
   }
   variable="yellow";
   variableclass='a1';
   Data="center";
   Username="Sai";
   month=10;


   //Pipes
   //Built In Pipes
   //LowerCase
   LowerCaseExample="MY NAME IS KOTASAI";

   //UpperCase
   UpperCaseExample="my name is kotasai";

   //Currency
   CurrencyExample=120;

   //Percentage
   PercentageExample=0.6745;

   //Date
   DateExample=Date.now();

   //Json
   JsonExample={'firstname':'Ande','lastname':'kotasai'};
}

