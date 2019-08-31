import { TestBed } from '@angular/core/testing';

import { OpentriviaService } from './opentrivia.service';

describe('OpentriviaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpentriviaService = TestBed.get(OpentriviaService);
    expect(service).toBeTruthy();
  });
});
