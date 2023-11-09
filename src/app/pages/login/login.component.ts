import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService,
    private router: Router ) { }

  ngOnInit() {
  }

  login( form: NgForm ){


    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    //console.log(this.usuario)
    //console.log(form)
    this.auth.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');

      }, (err) => {

        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });

      });

  }

}
