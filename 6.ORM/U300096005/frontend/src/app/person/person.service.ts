import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";
import Any = jasmine.Any;

@Injectable()
export class PersonService {

  persons:Array<Any>;

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
