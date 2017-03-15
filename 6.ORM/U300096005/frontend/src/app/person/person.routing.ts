/**
 * Created by gary_ on 2017-03-15.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonFormComponent } from './person-form.component';

const PersonRoutes: Routes = [
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'person',
    component: PersonFormComponent
  }
];

export const PersonRouting: ModuleWithProviders = RouterModule.forChild(PersonRoutes);
