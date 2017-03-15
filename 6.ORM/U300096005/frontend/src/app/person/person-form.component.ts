import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/interfaces/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
