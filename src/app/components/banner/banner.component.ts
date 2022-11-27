import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Name, Title, BackImage, Photo, About } from 'src/app/Datas';
import { NAME, TITLE, BACKIMAGE, PHOTO, ABOUT } from 'src/app/mocks-porfolio';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() selection!: any;
  @Input() nombre: Name = NAME[0];
  @Input() banner: BackImage = BACKIMAGE[0];
  @Input() titulo: Title = TITLE[0];
  @Input() foto: Photo = PHOTO[0];
  @Input() acerca: About = ABOUT[0];

  seccionBanner: BackImage[] = [];
  seccionNombre: Name[] = [];
  seccionTitulo: Title[] = [];
  seccionFoto: Photo[] = [];
  seccionAcerca: About[] = [];

  constructor(private datosPortfolio:PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.getPhoto().subscribe(data => {
      this.seccionFoto = data;
    })
    this.datosPortfolio.getBackImage().subscribe(data => {
      this.seccionBanner = data;
    });
    this.datosPortfolio.getTitle().subscribe(data => {
      this.seccionTitulo = data;
    });
    this.datosPortfolio.getName().subscribe(data => {
      this.seccionNombre = data;
    });
    this.datosPortfolio.getAbout().subscribe(data => {
      this.seccionAcerca = data;
    });
  }
  hasRoute(route:string): boolean {// se puso boolea
    return this.router.url === route
  }
  onBackImageSelected(banner: any): void {
    this.selection = banner;
  }
  onPhotoSelected(foto: any): void {
    this.selection = foto;
  }
  onNameSelected(nombre: any): void {
    this.selection = nombre;
  }
  onTitleSelected(titulo: any): void {
    this.selection = titulo;
  }
  onAboutSelected(acerca: any): void {
    this.selection = acerca;
  }
  updatePhoto(foto: Photo): void {
    this.datosPortfolio.updatePhoto(foto)
    .subscribe(
      res => {
       const tempArr = this.seccionFoto.filter(item => item.id !== foto.id);
       this.seccionFoto = [...tempArr, foto];
     });
    return this.ngOnInit();
  }
  updateBackImage(banner: BackImage): void {
    this.datosPortfolio.updateBackImage(banner)
    .subscribe(
      res => {
       const tempArr = this.seccionBanner.filter(item => item.id !== banner.id);
       this.seccionBanner = [...tempArr, banner];
     });
    return this.ngOnInit();
  }
  updateName(nombre: Name): void {
    this.datosPortfolio.updateName(nombre)
    .subscribe(
      res => {
       const tempArr = this.seccionNombre.filter(item => item.id !== nombre.id);
       this.seccionNombre = [...tempArr, nombre];
     });
    return this.ngOnInit();
  }
  updateTitle(titulo: Title): void {
    this.datosPortfolio.updateTitle(titulo)
    .subscribe(
      res => {
       const tempArr = this.seccionTitulo.filter(item => item.id !== titulo.id);
       this.seccionTitulo = [...tempArr, titulo];
     });
    return this.ngOnInit();
  }
  updateAbout(acerca: About): void {
    this.datosPortfolio.updateAbout(acerca)
    .subscribe(
      res => {
       const tempArr = this.seccionAcerca.filter(item => item.id !== acerca.id);
       this.seccionAcerca = [...tempArr, acerca];
     });
    return this.ngOnInit();
  }
}
