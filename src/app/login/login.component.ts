import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  loginform = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.maxLength(15)]],
    });


  constructor(private fb: FormBuilder, private authuser: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.authuser.login(this.loginform.value.Email, this.loginform.value.Password);

  }

  logout() {
      this.authuser.logout();
  }
}
