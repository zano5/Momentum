import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UmodalUpdateModalPage } from './umodal-update-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UmodalUpdateModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UmodalUpdateModalPage]
})
export class UmodalUpdateModalPageModule {}
