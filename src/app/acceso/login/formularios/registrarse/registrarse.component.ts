import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  email = '**eve.holt@reqres.in';
  password = '12345';
  confirmPassword = '12345';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.authService.login(this.email, this.password)
  }
}
