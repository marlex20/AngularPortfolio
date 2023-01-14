import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Projects } from 'src/app/Datas';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos: Projects[] = [];;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((proyectos) => { 
      this.proyectos = proyectos; //compila sin colocar db.db.projects???     
    })
  }
 }

   


