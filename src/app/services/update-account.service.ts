import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UpdateAccountService {

  body = new URLSearchParams();

  message;


  accounts = [1234567890, 1029384756, 92837];

  headers = {
    'Content-Type': 'application/json'
  };



  constructor(private http: HTTP, public alertController: AlertController) { }


  updateAccountList(localId, idToken) {

this.body.set('', '[1234567890,1029384756, 92837]');


    // tslint:disable-next-line:max-line-length
this.http.put('https://momentum-retail-practical-test.firebaseio.com/clients/' + localId + '.json?auth=' + idToken,

this.body.toString(), this.headers).then(data => {



  this.message = 'Successfully updated Account List';

  this.presentAlert(this.message);

  console.log(data.data);

   }).catch(error => {


    console.log(error.status);
    console.log(error.error); // error message as string

  });


  }


  updateOneAccount(acountNumber, idToken, account) {



    this.body.set( 'balance', '' + account.balance);
    this.body.set( 'overdraft', '' + account.balance);


    this.http.put('https://momentum-retail-practical-test.firebaseio.com/accounts/' + acountNumber + '.json?auth=' + idToken,

    this.body.toString(), this.headers)
   .then(data => {

    console.log(data.data);

    this.message = 'Successfully updated Account';
    this.presentAlert(this.message);

   })
   .catch(error => {

     console.log(error.status);
     console.log(error.error); // error message as string

   });


  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Updated Account ',
      message: this.message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
