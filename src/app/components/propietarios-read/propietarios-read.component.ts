import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormProyectosComponent } from '../Forms/form-proyectos/form-proyectos.component';
import { FormPropietariosComponent } from '../Forms/form-propietarios/form-propietarios.component';

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