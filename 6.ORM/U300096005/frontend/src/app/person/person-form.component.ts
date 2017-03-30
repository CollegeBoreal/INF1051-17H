import {Component, OnInit, Input} from '@angular/core';
import {Http} from "@angular/http";
import {Person} from "../shared/interfaces/person";
// import { PersonComponent } from "./person.component"
import "rxjs/Rx";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

 public myForm: FormGroup;
 public submitted: boolean;
 public events: any[] = [];

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',[
        <any>Validators.required, 
        <any>Validators.minLength(3)
        ]),
      age: new FormControl('',<any>Validators.required)
    });
  }

  save(model:Person, isValid:boolean){
    this.submitted = true;

    console.log(model,isValid);

  }
  formFill(){}
}


  //   this.http.post('http://localhost:9000/api/persons')
  //   .map(model => model)
  //   .subscribe(
  //     result =>{
  //       Person.push(model);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   )
  //   return Person;

  // }