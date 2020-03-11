import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private eventAuthError = new BehaviorSubject<string>( ' ' );
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(public Auth: AngularFireAuth, private Database: AngularFirestore, private router: Router) { }

  getUserState() {
    return this.Auth.authState;
  }

  login(email: string, password: string) {
   // debugger;
    this.Auth.auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      if (userCredential) {
        this.router.navigate(['/menu']);
      }
    })
      .catch(error => {
        this.eventAuthError.next(error);
      });
  }

  logout() {
    return this.Auth.auth.signOut();
  }

}
