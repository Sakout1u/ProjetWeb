import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AjouterActualiteComponent } from './ajouter-actualite/ajouter-actualite.component';
import { MenuComponent } from './menu/menu.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);


export const appRoutes: Routes = [

  { path: 'login',    component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  // tslint:disable-next-line: max-line-length
  { path: 'menu',    component: MenuComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  // tslint:disable-next-line: max-line-length
  { path: 'utilisateur', component: UtilisateursComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  // tslint:disable-next-line: max-line-length
  { path: 'actualite', component: ActualiteComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  // tslint:disable-next-line: max-line-length
  { path: 'ajouteractualite', component: AjouterActualiteComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
