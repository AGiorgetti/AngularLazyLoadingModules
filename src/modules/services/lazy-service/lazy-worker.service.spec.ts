import { TestBed, inject } from '@angular/core/testing';

import { LazyWorkerService } from './lazy-worker.service';

describe('LazyWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyWorkerService]
    });
  });

  it('should be created', inject([LazyWorkerService], (service: LazyWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
