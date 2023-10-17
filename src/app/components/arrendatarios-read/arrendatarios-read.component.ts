import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormArrendatarioComponent } from '../Forms/form-arrendatario/form-arrendatario.component';


@Component({
  selector: 'app-arrendatarios-read',
  templateUrl: './arrendatarios-read.component.html',
  styleUrls: ['./arrendatarios-read.component.css']
})
export class ArrendatariosReadComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public apiService: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.apiService.Get("Arrendatarios").then((res) => {
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }
      this.dataSource.data = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  loadTable(data: any[]) {
    this.displayedColumns = [];
    for (let colum in data[0]) {
      this.displayedColumns.push(colum)
    }
    this.displayedColumns.push('Acciones');
  }

  openDialog() {
    //this.dialog.open(FormArrendatarioComponent, {
    //});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
