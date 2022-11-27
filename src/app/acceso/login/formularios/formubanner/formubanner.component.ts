import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Name, Title, BackImage, Photo, About } from 'src/app/Datas';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-formubanner',
  templateUrl: './formubanner.component.html',
  styleUrls: ['./formubanner.component.css']
})

export class FormubannerComponent implements OnInit {
  
 @Input() selection!: any;
 @Output() updateItemBackImageEvent = new EventEmitter<BackImage>();
 @Output() updateItemPhotoEvent = new EventEmitter<Photo>();
 @Output() updateItemNameEvent = new EventEmitter<Name>();
 @Output() updateItemTitleEvent = new EventEmitter<Title>();
 @Output() updateItemAboutEvent = new EventEmitter<About>();

  infoForm!: FormGroup;
 
  constructor( private readonly fb:FormBuilder, private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.infoForm = this.initForm();
  }
  private builForm() {
    this.infoForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      title: new FormControl(''),
      about: new FormControl(''),
      backImage: new FormControl(''),
      photo: new FormControl(''),
    });
  }
  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      backImage:['', [Validators.required]],
      photo:['', [Validators.required]],
      name:['', [Validators.required]],
      title:['', [Validators.required]],
      about:['', [Validators.required]],
    })
  }
  onReset(): void {
    this.infoForm.reset();
  }
  onUpdateItemBackImage(item: BackImage, change: string): void {
    const banner: BackImage = {
      id: item.id,
      backImage: change,
    }
      this.updateItemBackImageEvent.emit(banner);
    this.onReset();
  }
  onUpdateItemPhoto(item: Photo, change: string): void {
    const foto: Photo = {
      id: item.id,
      photo: change,
    }
    this.updateItemPhotoEvent.emit(foto);
    this.onReset();
  }
  onUpdateItemName(item: Name, change: string): void {
    const nombre: Name = {
      id: item.id,
      name: change,
    }
    this.updateItemNameEvent.emit(nombre);
    console.log('que nombre agarras', nombre)
    this.onReset();
  }
  onUpdateItemTitle(item: Title, change: string): void {
    const titulo: Title = {
      id: item.id,
      title: change,
    }
      this.updateItemTitleEvent.emit(titulo);
      this.onReset();
  }
  onUpdateItemAbout(item: About, change: string): void {
    const acerca: About = {
      id: item.id,
      about: change,
    }
    this.updateItemAboutEvent.emit(acerca);
    this.onReset();
  }  
}
