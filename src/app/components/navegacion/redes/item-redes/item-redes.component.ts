import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-item-redes',
  templateUrl: './item-redes.component.html',
  styleUrls: ['./item-redes.component.css']
})
export class ItemRedesComponent implements OnInit {

  misRedes: any;

  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.misRedes = data.network;
    });
  }
  hasRoute(route: string): boolean {
    return this.router.url === route
  }


}
