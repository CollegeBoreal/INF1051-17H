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
    this.person = {
      id: 0,
      name: '',
      age: 0
    };
  }

  public person: Person;

  save(model: Person, isValid: boolean) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}
