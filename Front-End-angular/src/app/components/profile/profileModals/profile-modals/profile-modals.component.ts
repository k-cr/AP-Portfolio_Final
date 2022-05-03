import { Component, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-profile-modals',
  templateUrl: './profile-modals.component.html',
  styleUrls: ['./profile-modals.component.css']
})
export class ProfileModalsComponent{

  showForm: boolean = false;
  @Output() newPerson: EventEmitter<Person> = new EventEmitter();
  constructor() { }

}
