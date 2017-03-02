import { Component,OnInit } from '@angular/core';
import { Http } from "@angular/http";


import "rxjs/Rx";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

 public pokemons: Array<any>;

    constructor(private http: Http) { 
        this.pokemons = [];
    }

  ngOnInit(){

        this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .map( result => result.json())
        .flatMap(result => result.results)
        .subscribe(
            result => {
                this.pokemons.push(result);
            },
            error => {
                console.error(error);
            }
        );
     
    }

}
