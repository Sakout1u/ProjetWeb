import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tp1';
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore, public auth: AngularFireAuth) {
    this.items = firestore.collection('items').valueChanges();
  }
}
