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
    config.interval= 50000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


}
