import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/Datas';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-formuformacion',
  templateUrl: './formuformacion.component.html',
  styleUrls: ['./formuformacion.component.css']
})
export class FormuformacionComponent implements OnInit {
  
  @Input() selection!: Education;
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter();
  @Output() updateItemEducationEvent: EventEmitter<Education>  = new EventEmitter();

  educacionForm!: FormGroup;

  constructor(private readonly fb:FormBuilder, private datosPortfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.educacionForm = this.initForm();
  }
  private builForm() {
    this.educacionForm = new FormGroup({
      id: new FormControl(''),
      image: new FormControl(''),
      name: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl('')
    });
  }
  onSubmitEducation() {
    this.onAddEducation.emit(this.educacionForm.value);
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
    this.educacionForm.reset();
  } 
  onUpdateItemEducation(item: Education, change: string): void {
    const educacion: Education = {
      id: item.id,
      name: change,
      image: change,
      title: change,
      description: change,
      date: change,
    }
    this.updateItemEducationEvent.emit(educacion);
    this.onReset();
  } 
}
