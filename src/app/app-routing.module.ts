import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArriendoComponent } from './components/arriendo/arriendo.component';
import { ArreglosLocativosComponent } from './components/arreglos-locativos/arreglos-locativos.component';
import { ArrendatariosReadComponent } from './components/arrendatarios-read/arrendatarios-read.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PropietariosReadComponent } from './components/propietarios-read/propietarios-read.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FormArrendatarioComponent } from './components/Forms/form-arrendatario/form-arrendatario.component';
import { FormPropietariosComponent } from './components/Forms/form-propietarios/form-propietarios.component';

const routes: Routes = [
  { path: "Arrendatarios", component:ArrendatariosReadComponent },
  { path: "Propietarios", component:PropietariosReadComponent },
  { path: "Pagos", component:PagosComponent },
  { path: "Proyectos", component:ProyectosComponent },
  { path: "Arriendos", component:ArriendoComponent },
  { path: "Inmuebles", component:InmuebleComponent },
  { path: "ArreglosLocativos", component:ArreglosLocativosComponent },
  { path: "Form-Arrendatario", component:FormArrendatarioComponent },
  { path: "Form-Propietario", component:FormPropietariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
