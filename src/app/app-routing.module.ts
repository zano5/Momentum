import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalAddAccountPage } from './modal-add-account/modal-add-account.page';
import { UmodalUpdateModalPage } from './umodal-update-modal/umodal-update-modal.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)},
  { path: 'login', loadChildren: './screens/login/login.module#LoginPageModule' },
  { path: 'detail', loadChildren: './screens/detail/detail.module#DetailPageModule' },
  { path: 'modal-add-account', component:  ModalAddAccountPage },
  { path: 'umodal-update-modal', component:  UmodalUpdateModalPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
