import { Component, OnInit } from '@angular/core';
import {APIServiceService} from 'src/app/api-service.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'



@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {
  formGroup:any
  enteredData={
    "mobile":"",
    "password":""
 }
 constructor(public api:APIServiceService,public router:Router) { 
 } 

 
 ngOnInit(): void {
  this.formGroup = new FormGroup({
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  });
}
onReset() {
  this.formGroup.reset();
  }
  
    signin(){
  this.api.login(this.formGroup.value).subscribe(data=>{
  Swal.fire(data?data.message:'')
  this.router.navigate(["/home"]);
  })
    }
}











