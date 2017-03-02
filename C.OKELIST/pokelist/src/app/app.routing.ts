import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'pokemon',
  //    pathMatch: 'full'
  // },
  {
    path: '',
    component: PokemonComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
