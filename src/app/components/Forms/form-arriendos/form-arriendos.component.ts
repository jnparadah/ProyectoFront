import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-arriendos',
  templateUrl: './form-arriendos.component.html',
  styleUrls: ['./form-arriendos.component.css']
})
export class FormArriendosComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    CedulaArrendatario: [null, Validators.required],
    id_contrato: [null, Validators.required],
    lastName: [null, Validators.required],
    VrCanon: [null, Validators.required],
    VrAdmon: null,
    ReciboCaja: [null, Validators.required],
  });

  hasUnitNumber = false;
  
  onSubmit(): void {
    alert('Thanks!');
  }
}
