import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaliza-tu-mascota',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './personaliza-tu-mascota.html',
  styleUrl: './personaliza-tu-mascota.scss'
})
export class PersonalizaTuMascota {}
