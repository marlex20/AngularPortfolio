import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any= [];
  
  constructor(private datosPortfolio:PortfolioService) {}
   
  ngOnInit(): void {
    this.datosPortfolio.getExperience().subscribe((data) => { 
      this.experienciaList = data.experience;     
    })
  }
}


