import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { PokemonInfoComponent } from './pokemon-info.component';

const PokemonRoutes: Routes = [
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'pokemon/:name',
    component: PokemonInfoComponent
  }
];

export const PokemonRouting: ModuleWithProviders = RouterModule.forChild(PokemonRoutes);