import { TestBed } from '@angular/core/testing';

import { ContratanteService } from './contratante.service';

describe('ContratanteService', () => {
  let service: ContratanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
