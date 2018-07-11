import { Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { DomainComponent } from '../modules/domain/domain/domain.component';

export const ROUTES: Routes = [

  // note: each page/module can have its very own base layout, very interesting approach

  // App views
  { path: '', component: ComponentComponent },
  { path: 'domain', component: DomainComponent},

  // Lazy loaded Modules Routes
  { path: 'routed1', loadChildren: '../modules/routed1/routed1.module#Routed1Module' },
  { path: 'routed2', loadChildren: '../modules/routed2/routed2.module#Routed2Module' },

  // Handle all other routes
  { path: '**', redirectTo: '' }
];
