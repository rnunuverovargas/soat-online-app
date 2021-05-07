import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() refreshToken: EventEmitter<any> = new EventEmitter();

  constructor(private readonly http : HttpClient) { }

  login(data, headers) {
    return this.http.post<any>('https://localhost:44313/api/Account/Login', data, { headers });
  }

  // insert(data, headers) {
  //   return this.http.post<any>('https://localhost:44309/api/User/insert', data, { headers });
  // }
}