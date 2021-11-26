import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  Admin = false;
  Maestro = false;
  Alumno = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('typeuser')=="Administrador"){
      this.Admin = true;
    }
  }

  salir(){
    this.authService.logout();
  }

}
