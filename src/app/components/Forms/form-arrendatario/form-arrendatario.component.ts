import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-arrendatario',
  templateUrl: './form-arrendatario.component.html',
  styleUrls: ['./form-arrendatario.component.css']
})
export class FormArrendatarioComponent {

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Cedula: [null, Validators.required],
    Nombres: [null, Validators.required],
    Apellidos: [null, Validators.required],
    Telefono: [null, Validators.required],
    Correo: [null, Validators.required],
  });

onSubmit(): void {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}
}