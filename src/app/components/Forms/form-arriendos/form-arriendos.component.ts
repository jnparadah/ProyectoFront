import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-arriendos',
  templateUrl: './form-arriendos.component.html',
  styleUrls: ['./form-arriendos.component.css']
})
export class FormArriendosComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
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
