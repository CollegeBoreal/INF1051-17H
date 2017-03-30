import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Person} from "../shared/interfaces/person";
import "rxjs/Rx";


@Injectable()
export class PersonService {

  persons:Person[];

  constructor(private http:Http) {
    this.persons=[];
  }

  PersonInit(){

    this.http.get("/api/persons")
      .map(result => result.json())
      .subscribe(
          result => {
            this.persons.push(result);
          },
        error => {
            console.error(error);
        }
      );
    return this.persons;
  }
}
