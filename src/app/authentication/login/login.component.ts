import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from './../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: AuthenticationService,
    private route: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      source: ['WEB'],
      userhashtoken: []
    });
  }

  loginUser() {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'access-token');
      this.route.navigate(["home"]);
      console.log(this.route.url);
    } else {
      this.route.navigate(["login"]);
    }
    // this.loginService.login(this.loginForm.value).subscribe((response)=>{
    //   console.log(response, 'response');
    // }, (error)=>{
    //   console.log(error, 'error');
    // });
  }

}
