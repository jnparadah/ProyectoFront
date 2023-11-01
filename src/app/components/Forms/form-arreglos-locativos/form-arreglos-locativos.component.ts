import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-arreglos-locativos',
  templateUrl: './form-arreglos-locativos.component.html',
  styleUrls: ['./form-arreglos-locativos.component.css']
})
export class FormArreglosLocativosComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    IdArreglo: [null, Validators.required],
    Fecha1: [null, Validators.required],
    Fecha2: [null, Validators.required],
    EstadoArreglo: [null, Validators.required],
    Observaciones: [null, Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
