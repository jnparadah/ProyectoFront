import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ArrendatariosModels } from 'src/app/Models/ArrendatariosModels';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-arrendatario',
  templateUrl: './form-arrendatario.component.html',
  styleUrls: ['./form-arrendatario.component.css']
})
export class FormArrendatarioComponent {

  constructor(public apiService: ApiService, public dialog: MatDialog) {

  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    Cedula: [null, Validators.required],
    Nombres: [null, Validators.required],
    Apellidos: [null, Validators.required],
    Telefono: [null, Validators.required],
    Correo: [null, Validators.required],
  });

  infoArrendatario: ArrendatariosModels = {

    CedulaArrendatario :  0,
    NombreArrendatario : "",
    ApellidoArrendatario : "",
    TelefonoArrendatario : 0,
    CorreoArrendatario : ""
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.infoArrendatario.CedulaArrendatario = this.addressForm.controls['Cedula'].value;
      this.infoArrendatario.NombreArrendatario = this.addressForm.controls['Nombres'].value;
      this.infoArrendatario.ApellidoArrendatario = this.addressForm.controls['Apellidos'].value;
      this.infoArrendatario.TelefonoArrendatario = this.addressForm.controls['Telefono'].value;
      this.infoArrendatario.CorreoArrendatario = this.addressForm.controls['Correo'].value;

      this.dialog.closeAll();
      this.apiService.post('Arrendatarios', this.infoArrendatario).then(res => {
        if (res == undefined) {
          Swal.fire({
            title: 'Creacion Realizada',
            text: 'El arrendatario ha sido creado',
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
