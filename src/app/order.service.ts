import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }
  createorder(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/order/createorder",{data:enteredData}    )
  }
  cartDetails(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/order/cartDetails",{data:enteredData}    )
  }
  checkout(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/order/checkout",{data:enteredData}    )
  }
}
