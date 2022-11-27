import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';
import { Router } from  '@angular/router' 
import { Projects } from 'src/app/Datas';
import { PROJECTS } from 'src/app/mocks-porfolio';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {
@Input() selection!: Projects;
@Input() proyecto: Projects = PROJECTS[0];
@Output() projectSelectedEvent = new EventEmitter<Projects>();     
proyectos: Projects[] = [];
   
  constructor(private datosPortfolio:PortfolioService,
    private router: Router) { }
  
  ngOnInit(): void {

    this.datosPortfolio.getProjects().subscribe((proyectos) => { 
      this.proyectos = proyectos; //compila sin colocar db.db.projects??? porque es el nombre que tu quieras es el resq      
    })
  }
  addProject(proyecto: Projects){
    this.datosPortfolio.addProject(proyecto).subscribe((proyecto)=> {
      this.proyectos.push(proyecto)
      })
  } 
  hasRoute(route:string): boolean {// se puso boolea
    return this.router.url === route
  }
  updateProject(proyecto: Projects): void {
    this.datosPortfolio.updateProject(proyecto)
    .subscribe(
      res=> {
      const tempArr = this.proyectos.filter(item => item.id !== proyecto.id);
      this.proyectos = [...tempArr, proyecto];
    });
    return this.ngOnInit();
  }
  deleteProject(proyecto: Projects){
    this.datosPortfolio.deleteProject(proyecto)
    .subscribe(
      () => {
      this.proyectos = this.proyectos.filter( (p) => {
        return p.id !== proyecto.id
      })
    })
  }
  onProjectSelected(proyecto: Projects) {
    this.selection = proyecto;
  }
}

