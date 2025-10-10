import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio' },
    { path: 'inicio', component: Inicio },
    { path: '**', redirectTo: '' }
];
