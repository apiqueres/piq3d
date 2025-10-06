import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction';

export const routes: Routes = [
    { path: '', component: UnderConstructionComponent },
    { path: '**', redirectTo: '' }
];
