import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agregardos',
  templateUrl: './agregardos.component.html',
  styleUrls: ['./agregardos.component.css']
})
export class AgregardosComponent implements OnInit {
  form: FormGroup;

  id:any;
  table = [{
    _id: '',
    title: '',
    description: '',
    nameoriginal: '',
    topics: '',
    imagePath: ''
  }]
  conocimientoform = {
    title: '',
    description: '',
    topics:'',
    nameoriginal:''
  }
  topicss ={
    topic:''
  }
  iduser:any;
  Topicosseparate:any;
  stringtopicos ="";
  constructor( 
    private autservice: AuthService,
    private router: Router,
    public formulario:FormBuilder,
    private fb: FormBuilder 
    ) { 
      this.form = fb.group({
        title: ['', Validators.required],
        description:['', Validators.required],
        nameoriginal:['', Validators.required],
        topics:['', Validators.required]
      });

    }

  ngOnInit(): void {
    this.id = localStorage.getItem('editableid');
    this.Cargardatos();
    this.form.controls['nameoriginal'].disable();
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

  EditarConocimiento(){

  }


  
}
