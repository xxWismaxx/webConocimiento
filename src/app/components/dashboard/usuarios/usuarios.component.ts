import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  table: any;
  archive: any;
  displayedColumns: string[] = ['Correo', 'Tipo', 'Acciones',];
  dataSource = new MatTableDataSource;
  currencies = [
    { value: '1', text: 'Alumno' },
    { value: '2', text: 'Maestro' },
    { value: '3', text: 'Administrador' }
  ];
  iduser = "";
  correos = "";

  selected: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
      this.Cargardatos();
  }

  ngAfterViewInit() {
    
  }

  Cargardatos(){
    this.authService.getusers().then(res=>{
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
      text: 'Perderás toda la información del usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI',
      cancelButtonText: 'NO',
    }).then((result) => {

      if (result.isConfirmed) {
        this.authService.deleteuser(id);
        window.location.reload();
      } else if (result.isDismissed) {
      }
    })


  }

  editconocimiento(id: string, email: string){
    console.log(id, email)
    this.iduser = id;
  }

  editarconfirmar(){
    if (this.iduser !=""){
      //this.authService.updateuser(this.iduser, this.selected);
      this.authService.updateuser(this.iduser, this.selected)
       .subscribe(res => {
       console.log(res);
       window.location.reload();
      });
    } 
  }


}
