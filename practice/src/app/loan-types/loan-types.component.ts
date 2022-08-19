import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.css']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm!: FormGroup; 
  
  
  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
    //formGroup
     /* this.addLoanTypesForm =new FormGroup({
      'loanType':new FormControl(),
      'loanDescription':new FormControl(),
      'selection':new FormControl()
    })*/

    //FormBuilder
    /*this.addLoanTypesForm=this.form.group({
      'loanType':new FormControl(),
      'loanDescription':new FormControl,
      'selection':new FormControl
    })/*

    //set the values
   /* this.addLoanTypesForm=this.form.group({
      'loanType':new FormControl("gold Loan"),
      'loanDescription':new FormControl("Gold is very precious"),
      'selection':new FormControl('kota')
    })*/

   /* let settingValues={
      'loanType':'GoldLoan',
      'loanDescription':'Gold is high precious',
       'selection':'kota'
    }
    this.addLoanTypesForm.setValue(settingValues);
    //this.addLoanTypesForm.patchValue(settingValues);*/

    let users=new FormArray([
      new FormControl('kotasai'),
      new FormControl('Description about the job')
    ])

    //Applying Validations
    this.addLoanTypesForm=this.form.group({
      'loanType':new FormControl('',Validators.required),
      'loanDescription':new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        
      ]),
      'selection':new FormControl('',Validators.compose([
        Validators.required,
        
      ])),
      'users':new FormArray([
        new FormControl('kotasai'),
        new FormControl('Description about the job')
      ])
    })
   
   /* this.addLoanTypesForm.valueChanges.subscribe(data=>{
      console.log(data);
    })*/
   /* this.addLoanTypesForm.statusChanges.subscribe(data=>{
      console.log(data)
    })*/
   this.addLoanTypesForm.get('loanDescription')?.statusChanges.subscribe(data=>{
    console.log(data);

    

   })
   
   
  console.log(users.value)
  }
  
 

  addLoan(){
    console.log(this.addLoanTypesForm.value);
    console.log(this.addLoanTypesForm.get('loanType')?.value)
    console.log(this.addLoanTypesForm.dirty)
    console.log(this.addLoanTypesForm.touched)
    console.log(this.addLoanTypesForm.invalid)
    console.log(this.addLoanTypesForm.valid)
    console.log(this.addLoanTypesForm.untouched)
    console.log(this.addLoanTypesForm.pending)
  }
  resetForm(){
    this.addLoanTypesForm.reset();
  }

}
