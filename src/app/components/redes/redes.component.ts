import { Component, OnInit } from '@angular/core';
import {  PortfolioService } from 'src/app/servicio/portfolio.service'

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  misRedes: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.misRedes=data;
    }
    );
  }

}
