import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {

contact = {
    nombre: '',
    email: '',
    telefono: '',
    producto: '',
    mensaje: '',
    consent: false,
  };

  onSubmit(form: any) {
    if (form.invalid) return;
    console.log(this.contact);
    form.resetForm();
  }

  onFile(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    console.log('Archivo:', file);
  }

}
