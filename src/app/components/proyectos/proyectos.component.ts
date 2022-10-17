import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe((data) => { 
      this.proyectos = data.projects;
      
    })

  }


}
