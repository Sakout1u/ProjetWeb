import { Actualites } from '../actualites';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthentificationService } from './../authentification.service';

@Component({
  selector: 'app-ajouter-actualite',
  templateUrl: './ajouter-actualite.component.html',
  styleUrls: ['./ajouter-actualite.component.css']
})
export class AjouterActualiteComponent implements OnInit {

  profileForm = this.fb.group({
    titre: ['', [Validators.minLength(12), Validators.required]],
    date: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    contenu: ['', [Validators.minLength(10), Validators.required]]
  });
  private itemsCollection: AngularFirestoreCollection<Actualites>;
  constructor(private afs: AngularFirestore, private fb: FormBuilder, private auth: AuthentificationService) {
    this.itemsCollection = afs.collection<Actualites>('Actualite');
  }

  ngOnInit() {
  }

  onSubmit() {
    const titre = this.profileForm.value.titre;
    const date = this.profileForm.value.date;
    const contenu = this.profileForm.value.contenu;
    this.auth.connectToFirebase();
    const actualites: Actualites = {titre, date, contenu};
    this.itemsCollection.add(actualites);
  }

}
