import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './components/entrada/entrada.component';
import { LoginComponent } from './acceso/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './servicio/auth.guard';


const routes: Routes = [
  { path: 'entrada', component: EntradaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}, 
  { path: '', redirectTo:'/entrada', pathMatch:'full'},
  { path: '**', component: ErrorComponent },

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
