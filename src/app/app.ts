import { Component, HostListener, signal, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser, NgClass, NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,                         // ✅ imprescindible
  imports: [
    RouterOutlet,
    CommonModule,                           // ✅ trae *ngIf, *ngFor y NgClass
    NgClass,                                // ✅ por si usas [ngClass] explícitamente
    NgOptimizedImage,                       // ✅ si en app.html tienes <img ngSrc="...">
    RouterLink, RouterLinkActive,
    MatDividerModule, MatIconModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']                 // ✅ plural
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('piq3d');
  menuOpen = false;

  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);   // ✅ una sola inyección
  private aos: any | null = null;
  private navSub?: Subscription;

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  @HostListener('document:keydown.escape')
  onEsc() { this.menuOpen = false; }

  @HostListener('window:resize', ['$event'])
  onResize(ev: UIEvent) {
    const w = (ev.target as Window).innerWidth;
    if (w >= 900 && this.menuOpen) this.menuOpen = false;
  }

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Carga AOS una sola vez en cliente
    const mod = await import('aos');
    this.aos = mod.default;

    // Inicializa cuando ya está pintado
    setTimeout(() => {
      this.aos?.init({
        duration: 700,
        once: true,
        easing: 'ease-out',
      });
    });

    // ✅ Una única suscripción para:
    //  - cerrar menú al navegar
    //  - refrescar AOS
    this.navSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpen = false;
        this.aos?.refreshHard?.(); // o refresh()
      });
  }

  ngOnDestroy() {
    this.navSub?.unsubscribe();
  }
}
