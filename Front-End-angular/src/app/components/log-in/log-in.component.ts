import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private route: Router) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }

  get Username(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event: Event){
    event.preventDefault;
    this.auth.LogIn(this.form.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.route.navigate(['/portfolio']);
    })
  }

}
