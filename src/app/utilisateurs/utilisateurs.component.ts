import { Utilisateur } from './../utilisateur';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GetUtilisateurService } from '../get-utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  utilisateurs: Utilisateur[];

  constructor(private getutili: GetUtilisateurService) {
    this.getutili.getUsers().subscribe(utilisateurs => this.utilisateurs = utilisateurs);
  }

  ngOnInit() {
  }

}
