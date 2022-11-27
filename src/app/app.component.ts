import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'AngularMarlenys';
  
   constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
    config.interval= 50000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = true;
  }
}