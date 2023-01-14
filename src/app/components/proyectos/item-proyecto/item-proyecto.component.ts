import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {

  proyectos: any;

  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectos = data.projects;
    })
  }

  hasRoute(route: string): boolean {
    return this.router.url === route
  }

}

