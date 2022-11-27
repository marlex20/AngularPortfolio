import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Datas';
import { SKILLS } from 'src/app/mocks-porfolio';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-item-habilidad',
  templateUrl: './item-habilidad.component.html',
  styleUrls: ['./item-habilidad.component.css']
})
export class ItemHabilidadComponent implements OnInit {

  @Input() selection!: Skills;
  @Input() habilidad: Skills = SKILLS[0];
  
  @Output() skillSelectedEvent = new EventEmitter<Skills>();
  habilidades: Skills[] = [];   
  constructor(private datosPortfolio:PortfolioService,
    private router: Router) { }
  ngOnInit(): void {
    this.datosPortfolio.getSkills().subscribe(data => {
      this.habilidades = data;   
   });
  }
  hasRoute(route:string): boolean {
    return this.router.url === route
  }
  onSkillSelected(habilidad: any) {
    console.log('selection->', habilidad.name);
    this.selection = habilidad;
  }
  addSkill(habilidad: Skills): void {
    this.datosPortfolio.addSkill(habilidad).subscribe((habilidad)=> {
      this.habilidades.push(habilidad)
      });
  }
  deleteSkill(habilidad: Skills) : void {
    if (confirm('¿Esta seguro?')) {
      this.datosPortfolio.deleteSkill(habilidad)
      .subscribe(
        () => {
        this.habilidades = this.habilidades.filter( (h) => {
          return h.id !== habilidad.id
        })
      });
    }
  }
  updateSkill(habilidad: Skills) {
    this.datosPortfolio.updateSkill(habilidad).subscribe(
      res=> {
        const tempArr = this.habilidades.filter(item => item.id !== habilidad.id);
        this.habilidades = [...tempArr, habilidad];
        }
    );
    console.log('cambiar->', this.habilidades)
    this.onClear()
    return this.ngOnInit();   
  }
  onClear(): void {
    this.selection = {
      name: '',
      val: 0
    };
  }
}

