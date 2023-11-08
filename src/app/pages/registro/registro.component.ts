import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() {
    this.usuario = new UsuarioModel;
  }

  ngOnInit() {
    this.usuario.email = 'erikcruz3214@gmail.com'
  }

  onSubmit(){
    console.log('Formulario enviado');
    console.log(this.usuario);
  }


}
