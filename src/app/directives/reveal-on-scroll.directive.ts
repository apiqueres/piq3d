import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input() revealClass = 'is-visible';
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    this.r.addClass(this.el.nativeElement, 'will-reveal');
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          this.r.addClass(this.el.nativeElement, this.revealClass);
          this.observer?.unobserve(this.el.nativeElement);
        }
      }),
      { threshold: 0.15 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}
