import { ModalAddAccountPage } from './../../modal-add-account/modal-add-account.page';
import { UpdateAccountService } from './../../services/update-account.service';
import { CreateAccountService } from './../../services/create-account.service';
import { RetrieveAccountService } from './../../services/retrieve-account.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UmodalUpdateModalPage } from 'src/app/umodal-update-modal/umodal-update-modal.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  localId;
  idToken;
  info;
  view = false;

  accountDetail;

  accountInfo = {



    balance: 0,
    overdraft: 0

  };

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private updateService: UpdateAccountService , private retrieveService: RetrieveAccountService, public alertController: AlertController, private createService: CreateAccountService, public modalController: ModalController) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.localId = params.localId;
      this.idToken = params.idToken;
      console.log(this.idToken); // popular
    });


    this.userService.getUser(this.localId, this.idToken).then(data => {

      console.log(data.data); // data received by server

      this.info = JSON.parse(data.data);




    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string

    });
}





  onSignOut() {

    this.router.navigateByUrl('login');
  }

  updateList() {

    this.updateService.updateAccountList(this.localId, this.idToken);

  }
retrieveAccountDetail(accountNumber) {





    this.retrieveService.retrieveAccountDetail(accountNumber, this.idToken).then(data => {


      this.accountDetail = JSON.parse(data.data);

      console.log(JSON.parse(data.data));

      this.accountInfo.balance = this.accountDetail.balance;
      this.accountInfo.overdraft = this.accountDetail.overdraft;

      console.log('account', this.accountInfo);





    }).catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
    });

    this.view = true;

    console.log('retrieve id token', this.idToken);

}







async presentAccountAdd() {


  const modal = await this.modalController.create({
    component: ModalAddAccountPage,  componentProps: {idToken: this.idToken}
  });
  return await modal.present();

}


  async updateAmount(account) {


  const modal = await this.modalController.create({
    component: UmodalUpdateModalPage,  componentProps: {idToken: this.idToken, accountNumber: account}
  });
  return await modal.present();




}



async presentAccountUpdateOne(accountNumber) {
  const alert = await this.alertController.create({
    header: 'Account',
    message: 'Update Account Balance',
    inputs: [
      {
        name: 'balance',
        type: 'number',
        placeholder: '0'
      },
      {
        name: 'overdraft',
        type: 'number',
        placeholder: '0'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: data => {



          this.accountInfo.balance = data.balance;
          this.accountInfo.overdraft = data.overdraft;

          this.updateService.updateOneAccount(accountNumber, this.idToken, this.accountInfo);


        }
      }
    ]
  });

  await alert.present();
}

}
