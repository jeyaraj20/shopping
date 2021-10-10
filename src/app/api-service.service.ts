import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(public http: HttpClient) { }
  register(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/user/createuser",{data:enteredData}    )
  }
  forgetPassword(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/user/forgotPassword",{data:enteredData}    )
  }
  login(enteredData:any): Observable<any> {
    return this.http.post("http://3.21.165.81:4400/user/loginUser",{data:enteredData}    )
  }
verification (enteredData:Observable<any>){
  return this.http.post("http://3.21.165.81:4400/user/verifyUserOtp",{data:enteredData}    )  
  
}
resetPassword(enteredData:Observable<any>){
  return this.http.post("http://3.21.165.81:4400/user/resetPassword",{data:enteredData}    )  
  
}

getOneUser(enteredData:Observable<any>){
  return this.http.post("http://3.21.165.81:4400/user/getOneUser",{data:enteredData}    )  
  
}
getAllUser(enteredData:Observable<any>){
  return this.http.post("http://3.21.165.81:4400/user/getAllUsers",{data:enteredData}    )  
  
}
}