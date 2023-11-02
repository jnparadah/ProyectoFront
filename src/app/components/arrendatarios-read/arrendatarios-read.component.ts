import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormArrendatarioComponent } from '../Forms/form-arrendatario/form-arrendatario.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-arrendatarios-read',
  templateUrl: './arrendatarios-read.component.html',
  styleUrls: ['./arrendatarios-read.component.css']
})
export class ArrendatariosReadComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'telefono', 'Acciones'];
  dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public apiService: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.apiService.Get("Arrendatarios").then((res) => {      
      this.dataSource.data = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delRegistro(element: any){

    const id=element.cedula

    if(element !== undefined){
      this.apiService.delete('Arrendatarios', String(id)).then((res) =>{
        if (res == undefined) {
          Swal.fire({
            title: 'Eliminación Realizada',
            text: 'El arrendatario ha sido eliminado',
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
    this.dialog.open(FormArrendatarioComponent, {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}