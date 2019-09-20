import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

   body = new URLSearchParams();

  headers = {
    'Content-Type': 'application/json'
  };



  info;

  constructor(private http: HTTP) {
   }


   createAccount(idToken, account) {

    this.body.set('balance', account.balance);
    this.body.set('overdraft', account.overdraft);

    this.http.put('https://momentum-retail-practical-test.firebaseio.com/accounts/' + account.acountNumber + '.json?auth=' + idToken,
    this.body.toString(), this.headers).then(data => {


      console.log('successful');


    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string

    });





   }








}
