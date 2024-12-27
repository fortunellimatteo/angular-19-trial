import { TestBed } from '@angular/core/testing';

import { SessioniService } from './sessioni.service';

describe('SessioniService', () => {
  let service: SessioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
