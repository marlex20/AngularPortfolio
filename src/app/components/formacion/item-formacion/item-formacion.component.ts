import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/Datas';
import { EDUCATION } from 'src/app/mocks-porfolio';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-item-formacion',
  templateUrl: './item-formacion.component.html',
  styleUrls: ['./item-formacion.component.css'],
  
})

export class ItemFormacionComponent implements OnInit {

  @Input() selection!: Education;
  @Input() educacion: Education = EDUCATION[0];
  @Output() educationSelectedEvent = new EventEmitter<Education>(); 

  formacionList: Education[] = [];

  constructor(private datosPortfolio:PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.getEducation().subscribe((formacionList) => { 
      this.formacionList = formacionList; //compila sin colocar db.db.projects??? porque es el nombre que tu quieras es el resq      
    })
  }
  updateEducation(educacion: Education): void {
    this.datosPortfolio.updateEducation(educacion)
    .subscribe(
      res=> {
      const tempArr = this.formacionList.filter(item => item.id !== educacion.id);
      this.formacionList = [...tempArr, educacion];
    });
    return this.ngOnInit();
  }
  addEducation(educacion: Education): void {
    this.datosPortfolio.addEducation(educacion).subscribe((educacion)=> {
      this.formacionList.push(educacion)
      });
  } 
  hasRoute(route:string): boolean {// se puso boolea
    return this.router.url === route
  }
  deleteEducation(educacion: Education) : void {
    if (confirm('¿Esta seguro?')) {
      this.datosPortfolio.deleteEducation(educacion)
      .subscribe(
        () => {
        this.formacionList = this.formacionList.filter( (p) => {
          return p.id !== educacion.id
        })
      });
    }
  }   
  onEducationSelected(educacion: Education) {
    this.selection = educacion;
  }
}
