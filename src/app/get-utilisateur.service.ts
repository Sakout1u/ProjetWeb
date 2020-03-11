import { Utilisateur } from './utilisateur';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetUtilisateurService {
  userCollection: AngularFirestoreCollection<Utilisateur>;

  constructor(private firestore: AngularFirestore) { }

  public getUsers(): Observable<Utilisateur[]> {
    return this.firestore.collection<Utilisateur>('utilisateur').valueChanges();
  }
}

