import { Component, OnInit } from '@angular/core';
import {APIServiceService} from 'src/app/api-service.service'
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-haeder-section',
  templateUrl: './haeder-section.component.html',
  styleUrls: ['./haeder-section.component.css']
})
export class HaederSectionComponent implements OnInit {
 show: Boolean=false
  formGroup: any
  displayHeader: Boolean=false;
  header=[
    {manuName:"Home",routerlink:"/home"},
  {manuName:"SHOP",routerlink:"/vegetables"},
  {manuName:"PRODUCT",routerlink:"/women-shopping"},
  {manuName:"PAGES",routerlink:"/mart"},
  {manuName:"FEATURE",routerlink:"/menu"},
  {manuName:"BLOG",routerlink:"/combo-products"},
  {manuName:"COMBO",routerlink:"/Combo"} 
  ]
  public url = "http://suggestqueries.google.com/complete/search";
  public params = {
    hl: "en",
    ds: "yt",
    xhr: "t",
    client: "youtube",
  
  };
  public search = "";
  constructor() { }

  ngOnInit(): void {
  }

  
  handleResultSelected(result:any) {
    this.search = result;
  }
  view(){this.show=true

  }
  hide(){
    this.displayHeader=false
    
  }

}
