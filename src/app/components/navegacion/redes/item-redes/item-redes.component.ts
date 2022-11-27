import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from 'src/app/Datas';
import { NETWORK } from 'src/app/mocks-porfolio';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-item-redes',
  templateUrl: './item-redes.component.html',
  styleUrls: ['./item-redes.component.css']
})
export class ItemRedesComponent implements OnInit {

  @Input() selection!: Network;
  @Input() red: Network = NETWORK[0];
  @Output() networkSelectedEvent = new EventEmitter<Network>(); 

  misRedes: Network[] = [];

  constructor(private datosPortfolio:PortfolioService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.getNetworks().subscribe(data => {
       this.misRedes = data;   
    });
  }
  hasRoute(route:string): boolean {
    return this.router.url === route
  }
  onNetworkSelected(red: any) {
    console.log('selection->', red.name);
    this.selection = red;
  }
  updateNetwork(red: Network) {
    this.datosPortfolio.updateNetwork(red).subscribe(
      res=> {
        const tempArr = this.misRedes.filter(item => item.id !== red.id);
         this.misRedes = [...tempArr, red];
        }
    );
    console.log('cambiar->', this.misRedes)
    this.onClear()
    return this.ngOnInit();   
  }
  onClear(): void {
    this.selection = {
      name: '',
      logo: ''
    };
  }
}
