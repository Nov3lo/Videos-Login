import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.modelo';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyDVFf87XjPTlBqlOXiy98PAKTE-ohpmqLE';

  userToken: any;


  // CREAR NUEVOS USUARIOS
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http:HttpClient ) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signInWithPassword?key=${this.apikey}`, authData)
    .pipe(
      map((resp: any) => {
        if ('idToken' in resp) {
          this.guardarToken(resp['idToken']);
        } else {
          // Manejo de error o situación inesperada al no encontrar 'idToken' en la respuesta
        }
        return resp;
      })
    );

  }

  nuevoUsuario( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.url}signUp?key=${this.apikey}`, authData)
    .pipe(
      map((resp: any) => {
        if ('idToken' in resp) {
          this.guardarToken(resp['idToken']);
        } else {
          // Manejo de error o situación inesperada al no encontrar 'idToken' en la respuesta
        }
        return resp;
      })
    );

  }


  private guardarToken( idToken: string){

    this.userToken = idToken;
    localStorage.setItem('token',idToken);

  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado() : Boolean {
    return this.userToken.length > 2;
  }



}
