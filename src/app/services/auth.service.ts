import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyBSQqw4AXSCaxo1voSe-H8tgPbRumQmK7I';

 // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


 // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient) { }





  logout(){

  }

  login(usuario: UsuarioModel){

  }

  nuevoUsuario(usuario: UsuarioModel){

  }

}
