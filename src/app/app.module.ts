import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioService } from './servicio/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navegacion/navbar/navbar.component';
import { LogoComponent } from './components/navegacion/logo/logo.component';
import { BotonloginComponent } from './components/navegacion/botonlogin/botonlogin.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { RegistrarseComponent } from './components/acceso/registrarse/registrarse.component';
import { ListaComponent } from './components/navegacion/lista/lista.component';
import { BotonlogoutComponent } from './components/navegacion/botonlogout/botonlogout.component';
import { FormuredesComponent } from './components/acceso/formuredes/formuredes.component';
import { FormubannerComponent } from './components/acceso/formubanner/formubanner.component';
import { FormulaboralComponent } from './components/acceso/formulaboral/formulaboral.component';
import { FormuformacionComponent } from './components/acceso/formuformacion/formuformacion.component';
import { FormuhabilidadesComponent } from './components/acceso/formuhabilidades/formuhabilidades.component';
import { FormuproyectosComponent } from './components/acceso/formuproyectos/formuproyectos.component';
import { FormulistaComponent } from './components/acceso/formulista/formulista.component';
import { BotonreturnComponent } from './components/navegacion/botonreturn/botonreturn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemProyectoComponent } from './components/proyectos/item-proyecto/item-proyecto.component';
import { ItemFormacionComponent } from './components/formacion/item-formacion/item-formacion.component';
import { ItemExperienciaComponent } from './components/experiencia/item-experiencia/item-experiencia.component';
import { ItemRedesComponent } from './components/navegacion/redes/item-redes/item-redes.component';
import { ItemHabilidadComponent } from './components/habilidades/item-habilidad/item-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExperienciaComponent,
    FormacionComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    DashboardComponent,
    NavbarComponent,
    LogoComponent,
    BotonloginComponent,
    EntradaComponent,
    IniciosesionComponent,
    RegistrarseComponent,
    ListaComponent,
    BotonlogoutComponent,
    FormuredesComponent,
    FormubannerComponent,
    FormulaboralComponent,
    FormuformacionComponent,
    FormuhabilidadesComponent,
    FormuproyectosComponent,
    FormulistaComponent,
    BotonreturnComponent,
    ItemProyectoComponent,
    ItemFormacionComponent,
    ItemExperienciaComponent,
    ItemRedesComponent,
    ItemHabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
