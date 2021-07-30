import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegisterTrabajadorComponent } from './componentes/register-trabajador/register-trabajador.component';
import { RegisterUsuarioComponent } from './componentes/register-usuario/register-usuario.component';
import { SolicitudesComponent } from './componentes/solicitudes/solicitudes.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'navar', component: NavbarComponent},
  { path: 'tipoCuenta', component: TipoCuentaComponent},
  { path: 'registroUsuario', component: RegisterUsuarioComponent},
  { path: 'registroTrabajador', component: RegisterTrabajadorComponent},
  { path: 'home', component: HomeComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'solicitud', component: SolicitudesComponent},
  { path: 'listaUsuarios', component: UsuariosComponent},



  /* Esto hasta abajo; Toda ruta no encontrada la redirigirá a esta */
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
