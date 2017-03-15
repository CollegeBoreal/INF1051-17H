import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import "rxjs/Rx";
import {Person} from "../interfaces/person";
import {Observable} from "rxjs";

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  list(): Observable<Person[]> {
    this.http.get("/api/persons")
      .map( result => result.json())
      .flatMap(result => result.results)
      .subscribe(
        result => {
          this.persons.push(result);
        },
        error => {
          console.error(error);
        }
      );
  }

}
