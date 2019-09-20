import { CreateAccountService } from './../services/create-account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-account',
  templateUrl: './modal-add-account.page.html',
  styleUrls: ['./modal-add-account.page.scss'],
})
export class ModalAddAccountPage implements OnInit {

  idToken;
  addForm: FormGroup;

  constructor(private createService: CreateAccountService, private fb: FormBuilder, public modalController: ModalController) {

    this.addForm =  this.fb.group({

      account: ['', Validators.required],
        balance: ['', Validators.required],
          overdaft: ['', Validators.required ]

    });
   }

  ngOnInit() {
  }


  formSubmit({value, valid}: {value: Account, valid: boolean})  {


    this.createService.createAccount(this.idToken, value);


  }

  close() {

    this.modalController.dismiss({
      dismissed: true
    });
  }

}
