import { UpdateAccountService } from './../services/update-account.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-umodal-update-modal',
  templateUrl: './umodal-update-modal.page.html',
  styleUrls: ['./umodal-update-modal.page.scss'],
})
export class UmodalUpdateModalPage implements OnInit {

  idToken;
  updateForm: FormGroup;
  accountNumber;


  constructor(public modalController: ModalController, private updateService: UpdateAccountService, private fb: FormBuilder) {

    this.updateForm =  this.fb.group({

        balance: ['', Validators.required],
          overdaft: ['', Validators.required ]

    });


  }

  ngOnInit() {

  }

  close() {

    this.modalController.dismiss({
      dismissed: true
    });
  }


  formSubmit({value, valid}: {value: Account, valid: boolean})  {


    this.updateService.updateOneAccount(this.accountNumber, this.idToken, value);


  }

}
