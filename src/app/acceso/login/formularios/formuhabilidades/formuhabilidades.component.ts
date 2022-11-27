import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/Datas';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-formuhabilidades',
  templateUrl: './formuhabilidades.component.html',
  styleUrls: ['./formuhabilidades.component.css']
})
export class FormuhabilidadesComponent implements OnInit {
  @Input() selection!: Skills;
  @Output() updateItemSkillEvent: EventEmitter<Skills>  = new EventEmitter();
  @Output() onAddSkill: EventEmitter<Skills>  = new EventEmitter();

  habilidadForm!: FormGroup;

  constructor(private datosPortfolio:PortfolioService,
    private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.habilidadForm = this.initForm(); 
  }
  private builForm() {
    this.habilidadForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      val: new FormControl(''),
    });
  }
  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      name:['', [Validators.required]],
      val:['', [Validators.required]],
    })
  }
  onSubmitSkill() {
    this.onAddSkill.emit(this.habilidadForm.value);
    this.onReset();
  }
  onUpdateItemSkill(item: Skills, change: any): void {
    const habilidad: Skills = {
      id: item.id,
      name: change,
      val: change
    }
    this.updateItemSkillEvent.emit(habilidad);
    this.onReset();
  } 
  onReset(): void {
    this.habilidadForm.reset();
  } 
}
