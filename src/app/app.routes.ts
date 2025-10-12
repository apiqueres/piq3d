import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'productos', component: Productos},
    { path: 'contacto', component: Contacto},
    { path: '**', component: UnderConstructionComponent }
  
];
