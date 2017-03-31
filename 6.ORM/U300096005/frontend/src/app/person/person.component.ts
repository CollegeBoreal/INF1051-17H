import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import {Person} from "../shared/interfaces/person";

// import {Observable} from "rxjs";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public persons: Person[];

  constructor(private personService:PersonService) {
    this.persons = [];
  }

  ngOnInit() {
    this.persons = this.personService.PersonInit();
  }

}
