import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-fresh-vegetables',
  templateUrl: './fresh-vegetables.component.html',
  styleUrls: ['./fresh-vegetables.component.css']
})

  export class FreshVegetablesComponent implements OnInit {
    formGroup:any
    products:any
    constructor(public api:ProductService,private fb:FormBuilder,  ) { 
      
    }
   
    
    ngOnInit(): void {
      this.onSubmit()
     
    }
    onSubmit() {
     
        this.api.getAllProducts().subscribe(data=>{
         this.products=data.result
         console.log(data)
        })
      }
    
    onReset() {
      this.formGroup.reset();

    }
    singleData(car:any) {
      debugger;
    
      
    }
  }
