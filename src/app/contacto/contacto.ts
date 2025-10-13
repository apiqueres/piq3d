import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,                 // 👈 necesario para usar "imports" aquí
  imports: [CommonModule, FormsModule], // 👈 ngIf/ngFor + ngModel/ngForm
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss']    // 👈 en plural y como array
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

  fileNames: string[] = [];

  onFilesSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.fileNames = input.files ? Array.from(input.files).map(f => f.name) : [];
}


  onSubmit(form: any) {
    if (form.invalid) return;
    console.log(this.contact);
    form.resetForm();
    this.fileNames = []; // opcional: limpiar nombres tras enviar
  }

  opcionesProducto = [
  { value: 'llavero-personalizado', label: 'Llavero personalizado' },
  { value: 'llavero-logo', label: 'Llavero genérico/logo' },
  { value: 'figura-mascota', label: 'Figura mascota' },
  { value: 'trofeo', label: 'Trofeo (estándar / medio / mini / micro)' },
  { value: 'medallas', label: 'Medallas' },
  { value: 'nombre-personalizado', label: 'Nombre personalizado' },
  { value: 'marco-retroiluminado', label: 'Marco retroiluminado' },
  { value: 'figura-decorativa', label: 'Figura decorativa' },
  { value: 'otro', label: 'Otro' },
];

producto = '';          // valor para enviar
selectedLabel = '';     // texto mostrado
csOpen = false;

toggleCs() { this.csOpen = !this.csOpen; }

selectOption(o: {value: string; label: string}) {
  this.producto = o.value;
  this.selectedLabel = o.label;
  this.csOpen = false;
}

// cierra al hacer clic fuera
constructor(private el: ElementRef) {}
@HostListener('document:click', ['$event'])
onDocClick(ev: Event) {
  if (!this.el.nativeElement.contains(ev.target)) this.csOpen = false;
}
}
