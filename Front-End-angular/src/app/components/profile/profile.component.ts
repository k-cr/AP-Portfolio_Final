import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile?: Profile[];
  currentProfile: Profile = {};
  currentIndex = -1;
  
  myPortfolio:any;

  constructor(private portfolioData:PortfolioService, private profileService:ProfileService) { }

  ngOnInit(): void {
    
    this.portfolioData.getData().subscribe(data => {
      this.myPortfolio = data;
    });

    this.retrieveProfile();
  }

  retrieveProfile(): void {
    this.profileService.getAll()
        .subscribe({
          next: (data) => {
            this.profile = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
  }

  refreshList(): void {
    this.retrieveProfile();
    this.currentProfile = {};
    this.currentIndex = -1;
  }

  setActiveProfile(profile: Profile, index: number): void {
    this.currentProfile = profile;
    this.currentIndex = index;
  }


}
