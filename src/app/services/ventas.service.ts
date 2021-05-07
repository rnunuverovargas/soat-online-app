import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(
    private readonly http : HttpClient,
    private readonly userService : UserService
  ) { }

  getVentas(data, headers) {
    var dataUser = JSON.parse(sessionStorage.getItem('u'));

    return this.http.post('https://localhost:44313/api/Poliza/Consultar', data, { headers }).pipe(
      concatMap((response:any) => { 
        return of(response);
      }), 
      catchError((error) => {
        if (error.status == 401) {
          return this.userService.login(dataUser, headers).pipe(
            concatMap((r:any) => { 
              if(r.login[0].DESCRIPCION == "Usuario Valido") {
                sessionStorage.setItem('token', r.token.token);
                sessionStorage.setItem('u', JSON.stringify(dataUser));
                const token = sessionStorage.getItem('token');
                const header = { Authorization: 'Bearer ' + token };
                this.userService.refreshToken.emit(r.token.token);
                return this.getVentas(data, header);
              } else {
                this.userService.refreshToken.emit(null);
              }
            })
          )
        } 
      })
    )
  }
}