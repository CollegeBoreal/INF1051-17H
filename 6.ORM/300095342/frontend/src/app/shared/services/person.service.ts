import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import "rxjs/Rx";

import { Person } from '../interfaces/person';

@Injectable()
export class PersonService {
 

    constructor(private http: Http) { 
        
    }
  
  getPersons():Array<any>{
        let persons: Array<any> = [];
        // this.http.get("/api/persons")
        this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .map( result => result.json())
        .flatMap(result => result.results)
        .subscribe(
            result => {
                persons.push(result);
            },
            error => {
                console.error(error);
            }
        );
    console.log("exiting");
     return persons;
    }

}