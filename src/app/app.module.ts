import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ArrendatariosReadComponent } from './components/arrendatarios-read/arrendatarios-read.component';
import { PropietariosReadComponent } from './components/propietarios-read/propietarios-read.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ArriendoComponent } from './components/arriendo/arriendo.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { ArreglosLocativosComponent } from './components/arreglos-locativos/arreglos-locativos.component';
import { TableSchematicComponent } from './components/schematics/table-schematic/table-schematic.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardSchematicComponent } from './components/schematics/dashboard-schematic/dashboard-schematic.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { TreeSchematicComponent } from './components/schematics/tree-schematic/tree-schematic.component';
import { MatTreeModule } from '@angular/material/tree';
import { AvatarModule } from 'ngx-avatars';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArrendatariosReadComponent,
    PropietariosReadComponent,
    PagosComponent,
    ProyectosComponent,
    ArriendoComponent,
    InmuebleComponent,
    ArreglosLocativosComponent,
    TableSchematicComponent,
    DashboardSchematicComponent,
    TreeSchematicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatTreeModule,
    AvatarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }