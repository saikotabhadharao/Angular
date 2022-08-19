import { TestBed } from '@angular/core/testing';

import { AppinfoGuard } from './appinfo.guard';

describe('AppinfoGuard', () => {
  let guard: AppinfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppinfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
