import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  selected: any;
  user = {
    email: '',
    password: '',
    type:''
  }
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private autservices: AuthService
    ) { 
      this.form = fb.group({
        correo: ['', Validators.required],
        password:['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  aceptarregistro() {
    this.user.type = "Alumno";
    console.log(this.user)

    this.autservices.signup(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/login']);
        this.alert();
      },
      err => console.log(err)
     )
  }

  alert(){
    this.snackBar.open('Registro realizado correctamente','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
