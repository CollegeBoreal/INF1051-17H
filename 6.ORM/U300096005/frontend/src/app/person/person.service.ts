import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
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


  savePerson(person: Person): void {
        var body = 'name='+person.name+'&age='+person.age;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
          .post('/api/person',
            body, {
              headers: headers
            })
            .subscribe(data => {
                  alert('ok');
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
  }
}