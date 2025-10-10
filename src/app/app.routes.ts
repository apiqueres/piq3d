import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    { path: '', component: UnderConstructionComponent },
    { path: 'inicio', component: Inicio },
    { path: '**', redirectTo: '' }
];
