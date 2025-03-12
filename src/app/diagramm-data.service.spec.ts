import { TestBed } from '@angular/core/testing';

import { DiagrammDataService } from './diagramm-data.service';

describe('DiagrammDataService', () => {
  let service: DiagrammDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagrammDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
