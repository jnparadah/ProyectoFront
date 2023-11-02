import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormArriendosComponent } from '../Forms/form-arriendos/form-arriendos.component';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.component.html',
  styleUrls: ['./arriendo.component.css']
})
export class ArriendoComponent implements OnInit {
  displayedColumns: string[] = ['numeroContrato', 'inicio', 'nombreArrendatario', 'apellidoArrendatario', 'canon', "admon",  'Acciones'];
  dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public apiService: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.apiService.Get("ContratoArriendos").then((res) => {      
      this.dataSource.data = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    this.dialog.open(FormArriendosComponent, {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}