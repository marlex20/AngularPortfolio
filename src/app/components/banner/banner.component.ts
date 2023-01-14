import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  seccionBanner: any;

  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.seccionBanner = data;
    })
  }
  hasRoute(route: string): boolean {
    return this.router.url === route
  }

}
