import {Component, OnInit, Input} from '@angular/core';
import {Person} from "../shared/interfaces/person";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _person: Person;

  @Input()
  set person(person: Person) {
    this._person = person;
  }
  get person(): Person { return this._person; }

}
