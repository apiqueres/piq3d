import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule], // 👈 aquí
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss']
})
export class Contacto {
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

  constructor(
    private el: ElementRef,
    private router: Router,
    private snack: MatSnackBar // 👈 inyectamos snackbar
  ) {}

  toggleCs() { this.csOpen = !this.csOpen; }
  selectOption(o: { value: string; label: string }) {
    this.producto = o.value;
    this.selectedLabel = o.label;
    this.csOpen = false;
    // Quita el error visual si estaba marcado
    const prodField = this.el.nativeElement.querySelector('.producto-field');
    prodField?.classList.remove('field--error');
  }

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

  ngOnInit() {
    emailjs.init({ publicKey: this.EMAILJS_PUBLIC_KEY });
  }

  // Helper para abrir snackbars
  private openSnack(message: string, panelClass: string = 'snack-info', duration = 4000) {
    this.snack.open(message, 'Cerrar', { duration, panelClass: [panelClass] });
  }

  private isFieldValid(input: HTMLInputElement | HTMLTextAreaElement): boolean {
    if (input.type === 'checkbox') return (input as HTMLInputElement).checked;
    return !!input.value.trim();
  }

  private validateForm(form: HTMLFormElement): boolean {
    // Usa la validación nativa para lo estándar
    const nativeValid = form.checkValidity();

    // Validación manual para “producto” (input hidden no cuenta en HTML5)
    const prodFieldWrapper = this.el.nativeElement.querySelector('.producto-field');
    if (!this.producto) {
      prodFieldWrapper?.classList.add('field--error');
    } else {
      prodFieldWrapper?.classList.remove('field--error');
    }

    // Marca/Desmarca errores en los demás obligatorios
    const requiredNames = ['nombre', 'email', 'mensaje', 'consentimiento'];
    let ok = nativeValid && !!this.producto;

    requiredNames.forEach((name) => {
      const input = form.querySelector(`[name="${name}"]`) as HTMLInputElement | HTMLTextAreaElement | null;
      const wrapper = input?.closest('.field, .checkbox') as HTMLElement | null;
      if (!input) return;
      if (!this.isFieldValid(input)) {
        wrapper?.classList.add('field--error');
        ok = false;
      } else {
        wrapper?.classList.remove('field--error');
      }
    });

    // Si quieres que el navegador muestre los “tooltips” nativos:
    if (!nativeValid) form.reportValidity();

    return ok;
  }

  async sendEmail(ev: SubmitEvent) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    // Validación
    if (!this.validateForm(form)) {
      this.openSnack('Por favor, completa los campos obligatorios.', 'snack-error');
      return;
    }

    try {
      await emailjs.sendForm(this.EMAILJS_SERVICE_ID, this.EMAILJS_TEMPLATE_ID, form);

      // Limpia estado
      form.reset();
      this.fileNames = [];
      this.producto = '';
      this.selectedLabel = '';

      this.openSnack('¡Solicitud enviada! Te responderé en breve.', 'snack-success', 3000);
      this.router.navigateByUrl('/gracias');
    } catch (err) {
      console.error('EmailJS error:', err);
      this.openSnack('No se pudo enviar. Inténtalo de nuevo en unos minutos.', 'snack-error');
    }
  }
}
