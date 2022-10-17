import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList:any;

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe((data) => { 
      this.formacionList = data.education;

    })
  }

}
