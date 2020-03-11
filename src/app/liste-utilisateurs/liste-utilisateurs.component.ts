import { Utilisateur } from './../utilisateur';
import { Component, OnInit, Input } from '@angular/core';
import { GetUtilisateurService } from '../get-utilisateur.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})

export class ListeUtilisateursComponent implements OnInit {
  @Input()

  public utilisateur: Utilisateur;

  constructor() {
   }

  ngOnInit() {
  }

}
