import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) {


    this.loginForm =  this.fb.group({

    email: ['', Validators.compose([
        Validators.required ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)])],
        returnSecureToken: [true]




  });



   }

  ngOnInit() {
  }


  formSubmit({value, valid}: {value: Login, valid: boolean})  {




    this.loginService.login(value);


  }




}
