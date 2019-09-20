import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 headers = {
  'Content-Type': 'application/json'
};


  // tslint:disable-next-line:max-line-length
  constructor(private http: HTTP, public toastController: ToastController, private route: Router) { }

  info;

  login(log) {



  this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y',
   log, this.headers)
  .then(data => {

    console.log(log);
    console.log(data.data); // data received by server

    this.info = JSON.parse(data.data);


    console.log('idToken:', this.info.idToken);

    this.route.navigate(['/detail'], { queryParams: { localId: this.info.localId, idToken: this.info.idToken } });


  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string

    this.presentToast();

  });

  console.log(log);

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error Login. Please Try Again',
      duration: 2000
    });
    toast.present();
  }





}
