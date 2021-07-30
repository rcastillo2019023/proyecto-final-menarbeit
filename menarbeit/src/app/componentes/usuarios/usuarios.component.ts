import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuarios;
  public identidadUsuario;
  public usuarioModel: Usuario;

  constructor(
    private _usuarioService: UsuarioService
  ) { 
    this.usuarioModel = new Usuario("","","","","","",0,"",0,"","");
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(
      response =>{
        this.usuarios = response.usersFound;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

}
