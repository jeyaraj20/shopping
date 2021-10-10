import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service'

@Component({
  selector: 'app-mart',
  templateUrl: './mart.component.html',
  styleUrls: ['./mart.component.css']
})
export class MartComponent implements OnInit {
  Info: any;
  view:any;
  constructor(public api:ProductService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe(info => {
      this.view=info
debugger
        ;
    })
  }


}
