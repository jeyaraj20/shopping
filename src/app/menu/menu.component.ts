import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  allProduct:any
 single:any
 constructor(public api: ProductService , private fb: FormBuilder) { }

  header = [
    {class: ' item ', menuName: ' Nuts & Shacks', img: 'assets/img/Nuts & Shacks.jpg'},
    {class: ' item ', menuName: 'Fresh Vegetables', img: 'assets/img/Fresh Vegetables.jpg'},
    {class: ' item ', menuName: 'Fresh Fruits', img: 'assets/img/banana.jpg'},
    {class: ' item ', menuName: 'Daily Essentials & Dairy', img: 'assets/img/Daily Essentials & Dairy.jpg'},
    {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},

  ];
    data = [
      {class: ' item ', menuName: 'Beverages', img: 'assets/img/everages.jpg'},
      {class: ' item ', menuName: 'Herbel Cleaning', img: 'assets/img/Herbel Cleaning.jpg'},
      {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},
      {class: ' item ', menuName: 'Shampoo', img: 'assets/img/shampoo.jpg'}
      ];
      headers = [
        {class: ' item ', menuName: ' Nuts & Shacks', img: 'assets/img/Nuts & Shacks.jpg'},
        {class: ' item ', menuName: 'Fresh Vegetables', img: 'assets/img/Fresh Vegetables.jpg'},
        {class: ' item ', menuName: 'Fresh Fruits', img: 'assets/img/banana.jpg'},
        {class: ' item ', menuName: 'Herbel Cleaning', img: 'assets/img/Herbel Cleaning.jpg'},
        {class: ' item ', menuName: 'Daily Essentials & Dairy', img: 'assets/img/Daily Essentials & Dairy.jpg'},
      ];
        datas = [
          {class: ' item ', menuName: 'Beverages', img: 'assets/img/everages.jpg'},
          {class: ' item ', menuName: 'Herbel Cleaning', img: 'assets/img/Herbel Cleaning.jpg'},
          {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},
          {class: ' item ', menuName: 'Shampoo', img: 'assets/img/shampoo.jpg'},
          {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},
  
  
          ];
  ngOnInit(): void {
    this.getAllProducts()
    this.getProducts()
    this.searchProducts()
  }
  getAllProducts(){
    this.api.getAllProducts().subscribe(data=>{
    this.allProduct=data

    })
  }
    getProducts(){
      let  pro="tomato"
this.api.getProducts().subscribe(data=>{
})
  }
  searchProducts(){
    let searchedItem="vegitables"
    this.api.searchProducts(searchedItem).subscribe(data=>{
    this.allProduct=data
    })
  }
}

