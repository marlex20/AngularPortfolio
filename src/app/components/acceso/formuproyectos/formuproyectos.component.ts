import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Projects } from 'src/app/Datas';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-formuproyectos',
  templateUrl: './formuproyectos.component.html',
  styleUrls: ['./formuproyectos.component.css']
})


export class FormuproyectosComponent implements OnInit {
  @Input() selection!: Projects;
  @Output() onAddProject: EventEmitter<Projects> = new EventEmitter();
  @Output() updateItemProjectEvent = new EventEmitter<any>();

  proyectoForm!: FormGroup;

  constructor(private readonly fb:FormBuilder, private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
  }
  private builForm() {
    this.proyectoForm = new FormGroup({
      id: new FormControl(''),
      image: new FormControl(''),
      name: new FormControl(''),
      date: new FormControl(''),
      description: new FormControl(''),
      url: new FormControl(''),
    });
  }
  onSubmitProject() {
    this.onAddProject.emit(this.proyectoForm.value);
    this.onReset();
  }
  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      image:[''],
      name:['', [Validators.required]],
      description:['', [Validators.required]],
      date:['', [Validators.required]],
      url:['', [Validators.required]],
    })
  }
  onReset(): void {
    this.proyectoForm.reset();
  } 
  onUpdateItemProject(item: Projects, change: string): void {
    const proyecto: Projects = {
      id: item.id,
      name: change,
      image: change,
      description: change,
      date: change,
      url: change,
    }
    this.updateItemProjectEvent.emit(proyecto);
    this.onReset();
  } 
}


