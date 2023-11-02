import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormPropietariosComponent } from '../Forms/form-propietarios/form-propietarios.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietarios-read',
  templateUrl: './propietarios-read.component.html',
  styleUrls: ['./propietarios-read.component.css']
})

export class PropietariosReadComponent implements OnInit {

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'telefono', 'correo', 'cuenta', 'banco', 'Acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>

  constructor(public apiService: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.apiService.Get("Propietarios").then((res) => {
      this.dataSource.data = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delRegistro(element: any){

    const Id= element.Cedula

    if(element !== undefined){
      this.apiService.delete('Propietarios', String(Id)).then((res) => {
        if (res == undefined) {
          Swal.fire({
            title: 'Eliminación Realizada',
            text: 'El propietario ha sido eliminado',
            icon: 'success',
            color: '#7b1fa2',
          })
        }
      }).catch(error => {
        Swal.fire(
          `Status error ${error.status}`,
          `Message: ${error.message}`,
          `error`
        )
      })
    }else {
      Swal.fire(
        'Ingresar los datos',
        'Por favor ingrese todos los campos requeridos',
        'error'
      )
    }
  }

  openDialog() {
    this.dialog.open(FormPropietariosComponent, {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}