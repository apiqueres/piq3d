import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

type HeroImg = { src: string; alt: string; w?: number; h?: number; ready?: boolean };

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, RevealOnScrollDirective],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class Inicio {
  parallaxY = signal(0);
  private platformId = inject(PLATFORM_ID);

  heroImages: HeroImg[] = [
    { src: 'assets/llaveros1.png', alt: 'Llavero camiseta personalizado' },
    { src: 'assets/vogan.png',     alt: 'Figura 3D perro Vogan' },
    { src: 'assets/colette.png',   alt: 'Figura 3D perro Colette' },
    { src: 'assets/pubmviman.png', alt: 'Llaveros CD Arcadi' },
  ].map(i => ({ ...i, ready: false }));

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

  fileNames: string[] = [];

  toggleCs() { this.csOpen = !this.csOpen; }
  selectOption(o: { value: string; label: string }) {
    this.producto = o.value; this.selectedLabel = o.label; this.csOpen = false;
  }

  onProbeLoad(ev: Event, i: number) {
    const img = ev.target as HTMLImageElement;
    const w = img.naturalWidth || 800;
    const h = img.naturalHeight || 800;
    this.heroImages[i] = { ...this.heroImages[i], w, h, ready: true };
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileNames = input.files ? Array.from(input.files).map(f => f.name) : [];
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const max = 240;
    const y = Math.min(window.scrollY, max);
    this.parallaxY.set(y / max);
    document.documentElement.style.setProperty('--parallaxY', `${this.parallaxY()}`);
  }
}
