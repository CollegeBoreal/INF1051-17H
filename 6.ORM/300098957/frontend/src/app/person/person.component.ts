import { Component, OnInit } from '@angular/core';
import {PersonService} from "../shared/services/person.service";
import {Person} from "../shared/interfaces/person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public persons: Person[];

  constructor(private personService: PersonService) {
    this.persons = [];
  }

  ngOnInit() {
    this.persons = this.personService.list()
  }

}
