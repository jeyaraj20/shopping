import { Component, OnInit } from '@angular/core';
import {APIServiceService} from 'src/app/api-service.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup:any


  constructor(public api:APIServiceService,private fb:FormBuilder,public router:Router ) { 
    
   }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }
  onSubmit() {
   
      this.api.register(this.formGroup.value).subscribe((data:any)=>{
        Swal.fire(data.message)
       let userId= data.data._id._id;
       console.log(userId)
       this.router.navigate(["/otp", { 'id': userId }]);

      })
    }
  
  onReset() {
    this.formGroup.reset();
  }

 
 

  
dfgh(){
  
}
}
