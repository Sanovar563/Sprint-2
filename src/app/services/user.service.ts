import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private adduser="http://localhost:8080/hr"
  constructor( private http:HttpClient) { }

  public createUser(user:any):Observable<any>{
    return this.http.post<any>(this.adduser+"/",user);
  }
}
