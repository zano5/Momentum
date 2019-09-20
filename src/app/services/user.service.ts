import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  info;

  headers = {
    'Content-Type': 'application/json',
    Authorization: 'AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y'
  };

  constructor(private http: HTTP) { }


  getUser(localId, idToken) {

    // tslint:disable-next-line:max-line-length
  return  this.http.get('https://momentum-retail-practical-test.firebaseio.com/clients/' + localId + '.json?auth=' + idToken,
    {}, this.headers);



  }
}
