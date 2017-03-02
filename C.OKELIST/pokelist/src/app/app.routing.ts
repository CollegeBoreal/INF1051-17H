import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PokemonComponent
  }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
