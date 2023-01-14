import { Component, OnInit } from '@angular/core';
import { Projects } from '../../Datas';
import { PortfolioService } from '../../servicio/portfolio.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  proyectos: Projects[] = [];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }
  agregarProyecto(proyecto: Projects):void{
    this.proyectos.push(proyecto)
  }
}
