import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editarconocimiento',
  templateUrl: './editarconocimiento.component.html',
  styleUrls: ['./editarconocimiento.component.css']
})


export class EditarconocimientoComponent implements OnInit {
  form: FormGroup;

  id:any;
  table = [{
    _id: '',
    title: '',
    description: '',
    nameoriginal: '',
    nivel: '',
    granularidad: '',
    topics: '',
    imagePath: ''
  }]
  conocimientoform = {
    title: '',
    description: '',
    nivel: '',
    granularidad: '',
    topics:'',
    nameoriginal:''
  }
  topicss ={
    topic:''
  }
  Topicosseparate:any;
  stringtopicos ="";
  constructor( 
    private autservice: AuthService,
    private router: Router,
    public formulario:FormBuilder,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar
    ) { 
      this.form = fb.group({
        title: ['', Validators.required],
        description:['', Validators.required],
        nameoriginal:['', Validators.required],
        nivel:['', Validators.required],
        granularidad:['', Validators.required],
        topics:['', Validators.required]
      });

    }

  ngOnInit(): void {
    this.id = localStorage.getItem('editableid');
    this.Cargardatos();
    this.form.controls['nameoriginal'].disable();
  }

  Cargardatos(){
    this.autservice.getPhoto(this.id).then(res=>{
      this.conocimientoform = res.data;
      var str = this.conocimientoform.topics;
      this.Topicosseparate = str.split(', ').map(function(item) {
        return { item };
      });
    })  
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

  confirmagregar(){
    this.snackBar.open('Objeto correctamente editado','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  EditarConocimiento(){
    this.autservice.updatePhoto(this.id, this.conocimientoform.title, this.conocimientoform.description, this.conocimientoform.nivel, this.conocimientoform.granularidad, this.stringtopicos)
       .subscribe(res => {
       console.log(res);
       this.router.navigate(['/dashboard']);
       this.confirmagregar();
      });
    localStorage.removeItem('editableid');
  }

}

