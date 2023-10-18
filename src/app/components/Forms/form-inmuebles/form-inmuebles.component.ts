import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-inmuebles',
  templateUrl: './form-inmuebles.component.html',
  styleUrls: ['./form-inmuebles.component.css']
})
export class FormInmueblesComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    MatInmueble: [null, Validators.required],
    ChipInmueble: [null, Validators.required],
    CedulaPropietario: [null, Validators.required],
    MatProyecto: [null, Validators.required],
    TipoInmuebe: null,
    Nomenclatura: [null, Validators.required],
    NumEscritura: [null, Validators.required],
    AreaPrivada: [null, Validators.required],
    AreaConstruida: [null, Validators.required],
    Alcobas: [null, Validators.required],
    Banio: [null, Validators.required],
    Vehiculos: [null, Validators.required],
  });

  hasUnitNumber = false;

  onSubmit(): void {
    alert('Thanks!');
  }
}
