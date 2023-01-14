import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Network } from 'src/app/Datas';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-formuredes',
  templateUrl: './formuredes.component.html',
  styleUrls: ['./formuredes.component.css']
})
export class FormuredesComponent implements OnInit {

  @Input() selection!: Network;
  @Output() updateItemNetworkEvent: EventEmitter<Network>  = new EventEmitter();

  redForm!: FormGroup;

  constructor(private datosPortfolio:PortfolioService,
    private readonly fb:FormBuilder) { }
   
  ngOnInit(): void {
      this.redForm = this.initForm();   
  }
  private builForm() {
    this.redForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      logo: new FormControl(''),
    });
  }
  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      name:['', [Validators.required]],
      logo:['', [Validators.required]],
    })
  }
  onUpdateItemNetwork(item: Network, change: string): void {
    const red: Network= {
      id: item.id,
      name: change,
      logo: change
    }
    this.updateItemNetworkEvent.emit(red);
    this.onReset();
  } 
  onReset(): void {
    this.redForm.reset();
  } 
}
