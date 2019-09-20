import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,   ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAddAccountPage } from './modal-add-account.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddAccountPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAddAccountPage],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalAddAccountPageModule {}
