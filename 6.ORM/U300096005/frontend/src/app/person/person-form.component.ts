import {Component, OnInit, Input} from '@angular/core';
import {Http} from "@angular/http";
import {Person} from "../shared/interfaces/person";
import "rxjs/Rx";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input() name: String;
  age:number;

  // constructor() { }
  constructor(private http:Http) {
    this.persons=[];
  }

  ngOnInit() {
  }
  formFill(){
    this.age.push({this.age:'age'})
    this.person
  }

}