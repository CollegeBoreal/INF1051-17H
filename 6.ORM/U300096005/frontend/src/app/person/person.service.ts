import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class PersonService {

  constructor(private http:Http) { }

  PersonInit():Array<any>{
    let persons: Array<any> = [];
    this.http.get("http://localhost:4200")
      .map(result => result.json())
      .flatMap(result => result.results)
      .subscribe(
          result => {
            persons.push(result);
          },
        error => {
            console.error(error);
        }
      );
    return persons;
  }
}
