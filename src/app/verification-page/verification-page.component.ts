import { Component, OnInit } from '@angular/core';
import {APIServiceService} from 'src/app/api-service.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.css']
})
export class VerificationPageComponent implements OnInit {
  userId:any
  formGroup= new FormGroup({

  userId:new FormControl(''),
    verificationCode: new FormControl('', [
      Validators.required,
    ]), 
  })

  constructor(public api:APIServiceService,private fb:FormBuilder,public route: ActivatedRoute,public router:Router) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']
  });
  }
 
  OTP() {
   console.log(this.formGroup.value)
   this.formGroup.value.userId=this.userId
    this.api.verification(this.formGroup.value).subscribe((data:any)=>{
      Swal.fire(data["message"])
      
      this.router.navigate(["/reset-password", { 'id': this.userId }]);

    })
  }

}