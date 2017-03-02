import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import "rxjs/Rx";

@Injectable()
export class PokemonService {
 

    constructor(private http: Http) { 
        
    }
  
  pokemonInit():Array<any>{
        let pokemons: Array<any> = [];
        this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .map( result => result.json())
        .flatMap(result => result.results)
        .subscribe(
            result => {
                pokemons.push(result);
            },
            error => {
                console.error(error);
            }
        );
     return pokemons;
    }

}
