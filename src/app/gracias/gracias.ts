import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gracias',
  imports: [],
  templateUrl: './gracias.html',
  styleUrl: './gracias.scss'
})
export class Gracias {

  referencia = '';
  fechaHora = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Si en el futuro quieres pasar un id real por query (?ref=XXXX), lo recoges aquí:
    const ref = this.route.snapshot.queryParamMap.get('ref');
    this.referencia = ref || this.genRef();

    const now = new Date();
    this.fechaHora = new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(now);
  }

  private genRef(): string {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
  }

  volverInicio(): void {
    this.router.navigateByUrl('/');
  }
}
