import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-propietarios',
  templateUrl: './form-propietarios.component.html',
  styleUrls: ['./form-propietarios.component.css']
})
export class FormPropietariosComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    Cedula: [null, Validators.required],
    Nombres: [null, Validators.required],
    Apellidos: [null, Validators.required],
    Telefono: [null, Validators.required],
    Correo: [null, Validators.required],
    Banco: [null, Validators.required],
    NumeroDeCuenta: [null, Validators.required],
    TipoDeCuenta: ['AHORROS', Validators.required]
  });

  hasUnitNumber = false;

  onSubmit(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}
