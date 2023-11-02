import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-pagos',
  templateUrl: './form-pagos.component.html',
  styleUrls: ['./form-pagos.component.css']
})
export class FormPagosComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    RcPago: [null, Validators.required],
    FacturaPago: [null, Validators.required],
    Fecha: [null, Validators.required],
    AbonoAdministracion: [null, Validators.required],
    Fecha2: [null, Validators.required],
    InteresPago: [null, Validators.required],
    TasaInteres: [null, Validators.required]
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
