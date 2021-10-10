import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
  private newUser = new BehaviorSubject<any>({
    offerPrice:'',
    brand:'',
    offer:'',
    description: '',
    price:'',
    kilometer: '',
    Brand:'',
    slug:'',
    productId:'',
    productName:'',
    id:'',
    isActive:'',
    taxpercentage:''
  })
  createProduct(enteredData: any): Observable<any> {

    return this.http.post("http://3.21.165.81:4400/product/createProduct",{data:enteredData}    )
  }
  getProducts(): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/product/getProducts",{}    )
  }
  getAllProducts(): Observable<any> {
    return this.http.get("http://3.21.165.81:4400/product/getAllProducts")
  }
  updateProducts(enteredData: any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/product/updateProducts",{data:enteredData}    )
  }
  deleteProducts(enteredData: any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/product/deleteProducts",{data:enteredData}    )
  }
  searchProducts(enteredData: any): Observable<any> {
    return this.http.get("http://3.21.165.81:4400/product/search/banana")
  }
  getAllCombo( ): Observable<any> {
    return this.http.get( "http://3.21.165.81:8000/combo/getAllCombo" )
  }

  setNewUserInfo(user: any) {
    debugger;
    console.log(user)
    this.newUser.next(user);
  }
}
