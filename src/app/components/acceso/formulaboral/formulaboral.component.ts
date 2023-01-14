import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/Datas';
import { PortfolioService } from 'src/app/servicio/portfolio.service';
@Component({
  selector: 'app-formulaboral',
  templateUrl: './formulaboral.component.html',
  styleUrls: ['./formulaboral.component.css']
})
export class FormulaboralComponent implements OnInit {
  @Input() selection!: Experience;
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() updateItemExperienceEvent: EventEmitter<Experience>  = new EventEmitter();

  experienciaForm!: FormGroup;

  constructor(private readonly fb:FormBuilder, private datosPortfolio:PortfolioService ) { }
  
  ngOnInit(): void {
    this.experienciaForm = this.initForm();
  }
  private builForm() {
    this.experienciaForm = new FormGroup({
      id: new FormControl(''),
      image: new FormControl(''),
      name: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl('')
    });
  }
  onSubmitExperience() {
    this.onAddExperience.emit(this.experienciaForm.value);
    this.onReset();
  }
  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      image:[''],
      name:['', [Validators.required]],
      title:['', [Validators.required]],
      description:['', [Validators.required]],
      date:['', [Validators.required]],
    })
  }
  onReset(): void {
    this.experienciaForm.reset();
  } 
  onUpdateItemExperience(item: Experience, change: string): void {
    const experiencia: Experience = {
      id: item.id,
      name: change,
      image: change,
      title: change,
      description: change,
      date: change,
    }
    this.updateItemExperienceEvent.emit(experiencia);
    this.onReset();
  } 
}

