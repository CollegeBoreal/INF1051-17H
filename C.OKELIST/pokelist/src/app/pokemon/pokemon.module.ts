import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PokemonInfoComponent } from './pokemon-info.component';
import { PokemonRouting } from './pokemon.routing';

import { PokemonService } from './pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    PokemonRouting
  ],
  declarations: [
    PokemonComponent,
    PokemonInfoComponent
  ],
  providers: [ PokemonService ]
})
export class AboutModule {}
