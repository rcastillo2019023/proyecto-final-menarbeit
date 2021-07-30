import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./global.service";
import { Usuario } from '../modelos/modelo.usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: String;
  public identidad;
  public identidadLiga;
  public headersV = new HttpHeaders().set('Content-Type', 'application/json');
  public token;


  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }


   obtenerUsuarios(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())
    
    return this._http.get(this.url + '/listUsers', {headers: headersToken})
   }

  //-------------------------usuario logueado------------------------
   eliminarCuenta():Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.delete(this.url + '/deleteProfile'  ,{headers: headersToken})
  }
   editarCuenta(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersV.set('Authorization', this.getToken())

     return this._http.put(this.url + '/updateProfile/', params, {headers: headersToken})
   }


   obtenerUsuarioId(id:String): Observable<any>{
    return this._http.get(this.url + '/findUserId/'+ id, {headers: this.headersV})
  }
  //-----------------Funciones generales---------------------------------------------------------------------------------
  registro(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/registerClient', params, { headers: this.headersV })
   }
   login(userLog): Observable<any> {
    let params = JSON.stringify(userLog);

    return this._http.post(this.url + '/login', params, { headers: this.headersV });
  }
  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('persona'));
    if (identidad2 != 'undefined') {
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }
    getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }
}
