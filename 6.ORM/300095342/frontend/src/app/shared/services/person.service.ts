import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import "rxjs/Rx";

import { Person } from '../interfaces/person';

@Injectable()
export class PersonService {
  persons: Array<any> = [];

    constructor(private http: Http) { 
        
    }
  
  getPersons():Array<Person[]>{
        
        this.http.get("/api/persons")
        // this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .map( result => result.json())
        .subscribe(
            result => {
                this.persons.push((result));
                // console.log(JSON.stringify(this.persons));
                // console.log(JSON.stringify(result));
            },
            error => {
                console.error(error);
            }
        );
     return this.persons;
    }
}