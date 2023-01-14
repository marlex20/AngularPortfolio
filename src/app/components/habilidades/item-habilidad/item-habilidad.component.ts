import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-item-habilidad',
  templateUrl: './item-habilidad.component.html',
  styleUrls: ['./item-habilidad.component.css']
})
export class ItemHabilidadComponent implements OnInit {

  habilidades: any;
  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.habilidades = data.skills;
    });
  }
  hasRoute(route: string): boolean {
    return this.router.url === route
  }

}

