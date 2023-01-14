import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicio/portfolio.service';


@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {

  experienciaList: any;

  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList = data.experience;
    })
  }

  hasRoute(route: string): boolean {
    return this.router.url === route
  }

}
