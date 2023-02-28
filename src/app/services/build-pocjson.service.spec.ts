import { TestBed } from '@angular/core/testing';

import { BuildPOCJsonService } from './build-pocjson.service';

describe('BuildPOCJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildPOCJsonService = TestBed.get(BuildPOCJsonService);
    expect(service).toBeTruthy();
  });
});
