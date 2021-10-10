import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }
  addcategory(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/category/addcategory",{data:enteredData}    )
  }
  getcategory(enteredData:any): Observable<any> {
    return this.http.get("http://3.21.165.81:4400/category/getcategory" )
  }
  findcategory(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/category/findcategory",{data:enteredData}    )
  }
  deletecategory(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/category/deletecategory",{data:enteredData}    )
  }
}
