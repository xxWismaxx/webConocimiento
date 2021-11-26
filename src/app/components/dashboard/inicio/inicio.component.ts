import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  table: any;
  archive: any;
  displayedColumns: string[] = ['archivo', 'name', 'descrip', 'nivel', 'granularidad',  'tags', 'acciones'];
  Admin = false;
  Maestro = false;
  Alumno = false;
  tipouser:any;
  idsuser:any;
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private authService: AuthService, private router: Router ) { }


  ngOnInit(): void {
    
    this.tipouser = localStorage.getItem('typeuser');
    this.idsuser = localStorage.getItem('iduser');
    if (this.tipouser =="Alumno"||this.tipouser =="Administrador"){
      this.Cargardatos();
    }else{
      this.CargardatosMaestro();
    }
    
  }

  ngAfterViewInit() {
    if (localStorage.getItem('typeuser')=="Alumno"){
      this.Alumno = true;
      this.Maestro = false;
      this.Admin = false;
    }
    
  }

  Cargardatos(){
    this.authService.getPhotos().then(res=>{
      this.table = res.data;
      this.dataSource = new MatTableDataSource(this.table);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
     
    })
  }

  CargardatosMaestro(){
    this.authService.getcontenMestro(this.idsuser).then(res=>{
      this.table = res.data;
      this.dataSource = new MatTableDataSource(this.table);
     this.dataSource.paginator = this.paginator;  
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteConocimiento(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Perderás toda la información del objeto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI',
      cancelButtonText: 'NO',
    }).then((result) => {

      if (result.isConfirmed) {
        this.authService.deletePhoto(id)
          .subscribe(res => {
            console.log(res)
          })
        window.location.reload();
      } else if (result.isDismissed) {
      }
    })
  }



  descargarelemento(id: string, url: string){
    console.log(id)
    console.log('http://3.142.110.174:4000/'+url)
    window.location.href='http://3.142.110.174:4000/'+url;    
  }

  editconocimiento(id: string){
      this.router.navigate(['/dashboard/editconocimiento']);
      localStorage.setItem('editableid', id);
  }

}
