import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class RetrieveAccountService {

  headers = {
    'Content-Type': 'application/json'
  };

  constructor(private http: HTTP, public alertController: AlertController) { }



  retrieveAccountDetail(acountNumber, idToken) {
    console.log('account Number', acountNumber);
    // tslint:disable-next-line:max-line-length


    return this.http.get('https://momentum-retail-practical-test.firebaseio.com/accounts/' + acountNumber + '.json?auth=' + idToken,
    {}, this.headers);



   }


}
