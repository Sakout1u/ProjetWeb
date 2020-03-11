import { Component, OnInit, Input } from '@angular/core';
import { Actualites } from '../actualites';

@Component({
  selector: 'app-liste-actualites',
  templateUrl: './liste-actualites.component.html',
  styleUrls: ['./liste-actualites.component.css']
})
export class ListeActualitesComponent implements OnInit {

  @Input()
  public actualites: Actualites;
  constructor() {
  }

  ngOnInit() {
  }

}
