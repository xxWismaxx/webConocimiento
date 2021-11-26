import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-agregarconocimiento',
  templateUrl: './agregarconocimiento.component.html',
  styleUrls: ['./agregarconocimiento.component.css']
})

export class AgregarconocimientoComponent implements OnInit {
  form: FormGroup;
  iduser:any;
  conocimientoform = {
    nombre: '',
    descripcion: '',
    nivel: '',
    granularidad: '',
    topics:''
  }
  topicss ={
    topic:''
  }
  Topicosseparate:any;
  stringtopicos ="";


  file: File | null = null;
  selectedFiles: any;
  constructor(private auth:AuthService, private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.form = fb.group({
      nombre: ['', Validators.required],
      descripcion:['', Validators.required],
      nivel:['', Validators.required],
      granularidad:['', Validators.required],
      topics:['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.Cargardatos();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    this.file = <File>event.target.files[0];
    console.log(this.file.name)
  }

  AgregarConocimiento(){
    this.iduser = localStorage.getItem('iduser');
    this.auth
    .createPhoto(this.conocimientoform.nombre, this.conocimientoform.descripcion, this.file!.name, this.conocimientoform.nivel, this.conocimientoform.granularidad , this.stringtopicos, this.iduser ,this.file!)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
        this.confirmagregar();
      },
      err => console.log(err)
    );
  return false;
  }

  confirmagregar(){
    this.snackBar.open('Objeto correctamente agregado','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  
  Cargardatos(){
      var str = this.conocimientoform.topics;
      this.Topicosseparate = str.split(', ').map(function(item) {
        return { item };
    });
    this.deletetopico(0,0);
  }

  deletetopico(id:any,iControl:any ){
    const index = this.Topicosseparate.indexOf();
    this.Topicosseparate.splice(iControl, 1);
  }

  addtopico(){
    if(this.topicss.topic != ""){
      this.Topicosseparate.push({item: this.topicss.topic});
      let resource = JSON.stringify(this.Topicosseparate);
      console.log(resource)
      //
      this.stringtopicos = resource.split(']').join('').split('[').join('').split('{"item":"').join('').split('"},').join(', ').split('"}').join('')
      console.log(this.stringtopicos)
      console.log(this.conocimientoform)
    }else{
    }
  }
}
