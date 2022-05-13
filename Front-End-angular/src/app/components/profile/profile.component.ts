import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
import { ProfileModalsComponent } from './profile-modals/profile-modals.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  @ViewChild("profileModals") profileModals!: ProfileModalsComponent;

  isLogged = false;
  isAdmin = false;

  person: Person = {
    fullname: '',
    ocupation: '',
    intitution: '',
    url_institution: '',
    url_pfp: '',
    url_banner: '',
  }

  constructor(private personService: PersonService, private tokenService: TokenService) {
    this.getPerson();
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  editPerson() {
    this.profileModals.setPerson(this.person);
  }

  getPerson(): void {
    this.personService.getPerson().subscribe((data) => {this.person = data});
  }

  edit(): void {
    this.profileModals.toggleForm();
  }

  create(person: Person){
    if(person.id){
      this.personService.update(person).subscribe((editedPerson) => {this.person = editedPerson});
    }
  }

  toPerson(){
    document.getElementById("person")!.scrollIntoView();
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }
}
