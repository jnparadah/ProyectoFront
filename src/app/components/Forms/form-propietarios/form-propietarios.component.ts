import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PropietariosModels } from 'src/app/Models/PropietariosModels';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-propietarios',
  templateUrl: './form-propietarios.component.html',
  styleUrls: ['./form-propietarios.component.css']
})
export class FormPropietariosComponent {

  constructor(public apiService: ApiService, public dialog: MatDialog) {

  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Cedula: [null, Validators.required],
    Nombres: [null, Validators.required],
    Apellidos: [null, Validators.required],
    Telefono: [null, Validators.required],
    Correo: [null, Validators.required],
    Banco: [null, Validators.required],
    NumeroDeCuenta: [null, Validators.required],
    TipoDeCuenta: ['AHORROS', Validators.required]
  });

  infoPropietarios: PropietariosModels = {
    
    CedulaPropietario: 0,
    NombrePropietario: "",
    ApellidoPropietario: "",
    TelefonoPropietario: 0,
    CorreoPropietario: "",
    CuentaBancariaPropietario: 0,
    TipoCuentaPropietario: "",
    NombreBancoPropietario: ""
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.infoPropietarios.CedulaPropietario = this.addressForm.controls['Cedula'].value;
      this.infoPropietarios.NombrePropietario = this.addressForm.controls['Nombres'].value;
      this.infoPropietarios.ApellidoPropietario = this.addressForm.controls['Apellidos'].value;
      this.infoPropietarios.TelefonoPropietario = this.addressForm.controls['Telefono'].value;
      this.infoPropietarios.CorreoPropietario = this.addressForm.controls['Correo'].value;
      this.infoPropietarios.NombreBancoPropietario = this.addressForm.controls['Banco'].value;
      this.infoPropietarios.CuentaBancariaPropietario = this.addressForm.controls['NumeroDeCuenta'].value;
      this.infoPropietarios.TipoCuentaPropietario = this.addressForm.controls['TipoDeCuenta'].value;

      this.dialog.closeAll();
      this.apiService.post('Propietarios', this.infoPropietarios).then(res => {
        if (res == undefined) {
          Swal.fire({
            title: 'Creacion Realizada',
            text: 'El propietario ha sido creado',
            icon: 'success',
            color: '#7b1fa2',
          })
        }
      }).catch(error => {
        Swal.fire(
          `Status error ${error.status}`,
          `Message: ${error.message}`,
          `error`
        )
      })
    } else {
      Swal.fire(
        'Ingresar los datos',
        'Por favor ingrese todos los campos requeridos',
        'error'
      )
    }
  }
}
