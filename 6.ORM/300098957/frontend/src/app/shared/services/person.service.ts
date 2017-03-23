import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";

import "rxjs/Rx";
import {Person} from "../interfaces/person";

import {Observable} from 'rxjs/Observable';

// http://chariotsolutions.com/blog/post/testing-angular-2-0-x-services-http-jasmine-karma/

@Injectable()
export class PersonService {

  private headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  list(): Person[] {
    let persons: Person[] = [];
    this.http.get("/api/persons")
      .map( result => result.json())
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

  getPersonList(): Observable<Person[]> {
    return this
      .http
      .get(`/api/persons`, {
        headers: this.headers
      })
      .map((res: any) => {
      let data = res.json();
      let persons: Person[] = [];
      data.forEach((item) => {

        persons.push(item);
      });
      return persons;
    }
    ).catch((err: any) => Observable.throw(err));
  }

}
