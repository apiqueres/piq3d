import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss']
})
export class Contacto {
  // === Estado UI que ya usabas ===
  fileNames: string[] = [];
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
  producto = '';
  selectedLabel = '';
  csOpen = false;

  toggleCs() { this.csOpen = !this.csOpen; }
  selectOption(o: { value: string; label: string }) {
    this.producto = o.value;
    this.selectedLabel = o.label;
    this.csOpen = false;
  }

  constructor(private el: ElementRef) {}
  @HostListener('document:click', ['$event'])
  onDocClick(ev: Event) {
    if (!this.el.nativeElement.contains(ev.target)) this.csOpen = false;
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileNames = input.files ? Array.from(input.files).map(f => f.name) : [];
  }

  // === EmailJS ===
  private readonly EMAILJS_SERVICE_ID = 'service_iltgb0v';
  private readonly EMAILJS_TEMPLATE_ID = 'template_mkmpqri';
  private readonly EMAILJS_PUBLIC_KEY = 'FsPXYdf9rutzo-Y8o';

  // Puedes inicializar una vez (opcional, también vale pasar publicKey en sendForm)
  ngOnInit() {
    emailjs.init({ publicKey: this.EMAILJS_PUBLIC_KEY });
  }

  async sendEmail(ev: SubmitEvent) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    try {
      // IMPORTANTE: el hidden [value]="producto" asegura que llegue el valor elegido
      const res = await emailjs.sendForm(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        form
        // { publicKey: this.EMAILJS_PUBLIC_KEY } // opcional si no llamas init()
      );

      // UX
      form.reset();
      this.fileNames = [];
      this.producto = '';
      this.selectedLabel = '';
      alert('¡Solicitud enviada! Te responderemos muy pronto.');
    } catch (err: any) {
      console.error('EmailJS error:', err);
      alert('No se pudo enviar. Inténtalo de nuevo en unos minutos.');
    }
  }
}
