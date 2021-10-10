import { Component, OnInit } from '@angular/core';
import {APIServiceService} from 'src/app/api-service.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formGroup:any
  constructor(public api:APIServiceService,private fb:FormBuilder,public router:Router) { }

  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ])
    });
  }
  onSubmit() {
   console.log(this.formGroup.value)
      this.api.forgetPassword(this.formGroup.value).subscribe(data=>{
        Swal.fire(data.message)
        let userId= data.data._id._id;
        console.log(userId)
        this.router.navigate(["/verification-page", { 'id': userId }]);
 
      })
    }
  
  onReset() {
    this.formGroup.reset();
  }
}
