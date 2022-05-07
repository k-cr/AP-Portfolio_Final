import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person.model';


@Component({
  selector: 'app-profile-modals',
  templateUrl: './profile-modals.component.html',
  styleUrls: ['./profile-modals.component.css']
})
export class ProfileModalsComponent{

  showForm: boolean = false;
  @Output() newPerson: EventEmitter<Person> = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id:[0],
      fullname: ['', [Validators.required]],
      ocupation: ['', [Validators.required]],
      intitution: ['', [Validators.required]],
      url_institution: ['', [Validators.required]],
      url_pfp: ['', [Validators.required]],
      url_banner: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event){
    event.preventDefault;
    if(this.form.valid){
      this.newPerson.emit(this.form.value);
      this.showForm = false;
    }else {
      console.log("Form Inválido");
    }
  }

  cancel(): void {
    this.form.reset();
    this.showForm = false;
  }

  setPerson(person: Person) {
    this.form.patchValue({
      id: person.id,
      fullname: person.fullname,
      ocupation: person.ocupation,
      intitution: person.intitution,
      url_institution: person.url_institution,
      url_pfp: person.url_pfp,
      url_banner: person.url_banner,
    });
    this.showForm = true;
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

}
