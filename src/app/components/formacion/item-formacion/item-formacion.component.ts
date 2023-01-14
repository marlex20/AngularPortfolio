import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-item-formacion',
  templateUrl: './item-formacion.component.html',
  styleUrls: ['./item-formacion.component.css'],

})

export class ItemFormacionComponent implements OnInit {

  formacionList: any;

  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.formacionList = data.education;
    })
  }

  hasRoute(route: string): boolean {
    return this.router.url === route
  }

}
