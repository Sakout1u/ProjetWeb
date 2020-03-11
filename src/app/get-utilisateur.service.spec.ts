import { TestBed } from '@angular/core/testing';

import { GetUtilisateurService } from './get-utilisateur.service';

describe('GetUtilisateursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: GetUtilisateurService = TestBed.get(GetUtilisateurService);
    expect(service).toBeTruthy();
  });
});
