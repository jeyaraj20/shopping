import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
i: any;
  constructor() { }
  header=[
    {class:"item",manuName:"Home",routerlink:"/home",img:"assets/img/111a.jpg"},
  {class:"item",manuName:"SHOP",routerlink:"/vegetables",img:"assets/img/22b.jpg"},
  {class:"item",manuName:"PRODUCT",routerlink:"/women-shopping",img:"assets/img/111a.jpg"},
  {class:"item",manuName:"PAGES",routerlink:"/mart",img:"assets/img/22b.jpg"},
  {class:"item",manuName:"FEATURE",routerlink:"/menu",img:"assets/img/111a.jpg"},
  {class:"item",manuName:"BLOG",routerlink:"/combo-products",img:"assets/img/222b.png"},
  {class:"item",manuName:"COMBO",routerlink:"/Combo",img:"assets/img/22b"} 
  ];
  start=0;
  id: any;
  ngOnInit(): void {
    this.id = setInterval(() => {
      this.selectedImg(this.start)
      this.start++ 
    this.start= this.start>6?0: this.start
    }, 3000);
  }

  selectedImg(i:any){
 this.header.map((item)=>{
      if(item.class == "item active"){
        item.class="item"
      }
      this.header[i].class="item active"
      this.start=i;
      
    })
  }



}
