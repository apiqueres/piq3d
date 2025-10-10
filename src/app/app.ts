import { Component, HostListener, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('piq3d');
  menuOpen = false;

  constructor(private router: Router) {
    // Cierra el acordeón al navegar
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.menuOpen = false);
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  // Cierra con Escape
  @HostListener('document:keydown.escape') onEsc() { this.menuOpen = false; }

  // Si pasamos a escritorio, deja el acordeón cerrado (el layout de desktop lo ignora)
  @HostListener('window:resize', ['$event'])
  onResize(ev: UIEvent) {
    const w = (ev.target as Window).innerWidth;
    if (w >= 900 && this.menuOpen) this.menuOpen = false;
  }
}
