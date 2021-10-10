import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service'
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides = [
    {image: 'https://picsum.photos/seed/picsum/1200/300'}, 
    {image: 'https://picsum.photos/seed/picsum/1200/300'},
    {image: 'assets/img/groceries-2.jpg'}, 
    {image: 'https://picsum.photos/seed/picsum/1200/300'}, 
    {image: 'assets/img/groceries-3.jpg'}
  ];
    

  images = ["groceries-1.jpg", "groceries-2.jpg", "groceries-3.jpg"].map((n) => `assets/img/${n}`);
Detail=[
    {product:"groceries",name:"TATA",img:"assets/img/groceries-1.jpg"},
    {product:"groceries",name:"kids",img:"assets/img/groceries-2.jpg"},
    {product:"groceries",name:"RICE",img:"assets/img/groceries-3.jpg"},
    {product:"groceries",name:"VEGETABLES",img:"assets/img/groceries-4.jpg"},
  ]
  newproducts=[
    {product:"groceries",name:"TATA",img:"assets/img/groceries-1.jpg",off:"30%"},
    {product:"groceries",name:"kids",img:"assets/img/groceries-2.jpg",off:"40%"},
    {product:"groceries",name:"RICE",img:"assets/img/groceries-3.jpg",off:"50%"},
    {product:"groceries",name:"VEGETABLES",img:"assets/img/groceries-4.jpg",off:"60%"},
  ]
  dataList: any = [];

  products: any
  CompoList: any
  formGroup: any
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
    allCompo() {
     
      this.api.getAllCombo().subscribe(data=>{
       
       console.log(data)
      })
    }
    
all(): void {
    debugger;
    this.api.getAllCombo()
      .subscribe((result:any) => {
        this.CompoList = result;
        console.log(this.CompoList);

        var i=0;
        var length =  this.CompoList.data.CompoList.length;
        console.log(length);
        for(let i=0; i<length; i++){
  
        this.dataList.push(this.CompoList.data.CompoList[i]);
  
        }


      });
  }
  
  }