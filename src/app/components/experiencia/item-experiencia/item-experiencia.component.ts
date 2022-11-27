import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/Datas';
import { EXPERIENCE } from 'src/app/mocks-porfolio';
import { PortfolioService } from 'src/app/servicio/portfolio.service';


@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {

  @Input() selection!: Experience;
  @Input() experiencia: Experience = EXPERIENCE[0];
  @Output() experienceSelectedEvent = new EventEmitter<Experience>(); 

  experienciaList: Experience[] = [];

  constructor(private datosPortfolio:PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.getExperience().subscribe((experienciaList) => { 
      this.experienciaList = experienciaList;       
    })
  }
  updateExperience(experiencia: Experience): void {
    this.datosPortfolio.updateExperience(experiencia)
    .subscribe(
      res=> {
      const tempArr = this.experienciaList.filter(item => item.id !== experiencia.id);
      this.experienciaList = [...tempArr, experiencia];
    });
    return this.ngOnInit();
  }
  addExperience(experiencia: Experience): void {
    this.datosPortfolio.addExperience(experiencia).subscribe((experiencia)=> {
      this.experienciaList.push(experiencia)
      });
  } 
  hasRoute(route:string): boolean {// se puso boolea
    return this.router.url === route
  }
  deleteExperience(experiencia: Experience) : void {
    if (confirm('¿Esta seguro?')) {
      this.datosPortfolio.deleteExperience(experiencia)
      .subscribe(
        () => {
        this.experienciaList = this.experienciaList.filter( (p) => {
          return p.id !== experiencia.id
        })
      });
    }
  }   
  onExperienceSelected(experiencia: Experience) {
    this.selection = experiencia;
  }
}
