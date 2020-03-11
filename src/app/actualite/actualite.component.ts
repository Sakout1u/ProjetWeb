import { Actualites } from './../actualites';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {


  private itemsCollection: AngularFirestoreCollection<Actualites>;
  items: Observable<any[]>;
  constructor(db: AngularFirestore, private readonly afs: AngularFirestore) {
    //this.itemsCollection = afs.collection<Actualites>('Actualite');
    this.items = db.collection('Actualite').valueChanges();
  }
  ngOnInit() {
  }
}
