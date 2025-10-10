import { Directive, ElementRef, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[revealOnScroll]'
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // ← clave: sólo en navegador

    // También puedes chequear defensivamente:
    if (typeof globalThis.IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('reveal-in');
          // si quieres observar una sola vez:
          this.observer?.unobserve(this.el.nativeElement);
        }
      }
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
