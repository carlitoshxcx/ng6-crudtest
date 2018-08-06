import { TestBed, inject } from '@angular/core/testing';

import { VeiculosfipeService } from './veiculosfipe.service';

describe('VeiculosfipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculosfipeService]
    });
  });

  it('should be created', inject([VeiculosfipeService], (service: VeiculosfipeService) => {
    expect(service).toBeTruthy();
  }));
});
