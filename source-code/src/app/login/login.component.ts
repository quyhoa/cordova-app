import { Component, OnInit } from '@angular/core';
import {LoginService } from '../login.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private fagLg = false;
  private email = 'duc4@runsystem.net';
  private password = '123321';
  private os_type = 1;
  private errors = '';

  onSubmit(formLogin): void {
    const body = formLogin.value;
    this.loginService.loginPolan(body).subscribe(
      data => this.readData(data),
      error => console.log('oops', error.error.data)
    );
  }

  constructor(
    private loginService: LoginService,
    private localtion: Location,
    private router: Router) {
  }

  ngOnInit() {
  }

  private readData(data){console.log(data);
    if(data.code == 200){
      let token = data.data.token;
      localStorage.setItem('token',token);
      this.router.navigate(['dashboard']);
    }
    
  }


}
