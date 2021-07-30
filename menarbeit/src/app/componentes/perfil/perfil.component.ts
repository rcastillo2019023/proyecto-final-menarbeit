import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public identidad;
  public usuarios;
  public usuarioModel: Usuario;

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.identidad = this._usuarioService.getIdentidad();
    this.usuarioModel = new Usuario("","","","","","",0,"",0,"","");
   }

  ngOnInit(): void {
  }

  obtenerUsuarioId(idUsuario){
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe(
      response=>{
        this.usuarioModel = response.userFind;
        console.log(response);

      }
    )
  }
  editarUsuario(){
    this._usuarioService.editarCuenta(this.usuarioModel).subscribe(
      response=>{
        this.identidad = response.userUpdated;
        localStorage.setItem("persona", JSON.stringify(this.identidad));
        console.log(response);
        this.getIdentidad;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario editado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      
    )
  }
  eliminarUsuario(){
    this._usuarioService.eliminarCuenta().subscribe(
      response=>{
        console.log(response);
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No se pudo eliminar el usuario porque tiene una liga activa',
          showConfirmButton: false,
          timer: 1500,
        
        });
      }
    )
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

}
