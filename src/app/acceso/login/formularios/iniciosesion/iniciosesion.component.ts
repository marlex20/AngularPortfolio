import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  email = 'eve.holt@reqres.in';
  password = '12345';
  constructor(private authService: AuthService) { }
  login(){
    this.authService.login(this.email, this.password)
  }
  ngOnInit(): void {
  }
}
