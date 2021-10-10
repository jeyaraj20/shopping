import { Component, OnInit } from '@angular/core';
import {APIServiceService} from 'src/app/api-service.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userId:any;
  formGroup= new FormGroup({

    userId:new FormControl(''),
    password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]),
      cPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]), 
    })
 constructor(public api:APIServiceService,public route:ActivatedRoute,public router:Router) { 
 } 

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.userId = params['id']
});
}
onSubmit() {
 console.log(this.formGroup.value)


 if(this.formGroup.value.password != this.formGroup.value.cPassword){
   alert("Password and Confirm Password should be same")
   return
 }
 debugger
 let formData:any={userId:this.userId,password:this.formGroup.value.password};
  this.api.resetPassword(formData).subscribe((data:any)=>{
    Swal.fire(data.message)
    this.router.navigate(["/login"]);

  })
}

onReset() {
this.formGroup.reset();
}

 
}



















