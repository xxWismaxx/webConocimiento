import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  user = {
    email: '',
    password: '',
    type:''
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService
    ) {
      this.form = fb.group({
        correo: ['', Validators.required],
        password:['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  registro() {
    this.router.navigateByUrl('/registro');
  }

  loguearse() {
    console.log(this.user)
    this.authService.signin(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('typeuser', res.tepeuser);
          localStorage.setItem('iduser', res.iduser);
          this.loadingc();
          this.router.navigate(['/dashboard']);
        },
        err => this.error()
        
      )
  }

  error(){
    this.snackBar.open('El corrreo o contraseña son invalidos','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  loadingc(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 1500);
  }

}
