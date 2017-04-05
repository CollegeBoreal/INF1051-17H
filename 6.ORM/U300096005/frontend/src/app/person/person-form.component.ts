import {Component, OnInit, Input} from '@angular/core';
import {Person} from "../shared/interfaces/person";
import { PersonService } from "./person.service";
// import { PersonComponent } from "./person.component"
// import "rxjs/Rx";
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

 public persons: Array<any>;
 public person: Person;
 public _name: string;
 public _age: number;

  constructor(private formBuilder: FormBuilder,
  private personService: PersonService) { 
    this.persons=[] 
  }
  
  ngOnInit() {
      this.myForm = new FormGroup({
      name: new FormControl('',[
        <any>Validators.required, 
        <any>Validators.minLength(3)
        ]),
      age: new FormControl('',<any>Validators.required)
    });

    // this.subscribeToFormChanges();
  }
   
    // subscribeToFormChanges(){
    //   const myFormValueChanges$ = this.myForm.valueChanges;
    //   myFormValueChanges$.subscribe(FormGroup =>this.events
    //   .push({event: 'Status Change', object:FormGroup}));
    // }

  save(model:Person, isValid:boolean){
    this.submitted = true;

    console.log(model,isValid);
  }
  
  formFill(){
    this.person={id:0,name:this._name,age:this._age};
    this.personService.savePerson(this.person);
  }
  
}