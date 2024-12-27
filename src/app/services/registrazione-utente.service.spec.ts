import { TestBed } from '@angular/core/testing';

import { RegistrazioneUtenteService } from './registrazione-utente.service';

describe('RegistrazioneUtenteService', () => {
  let service: RegistrazioneUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrazioneUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
