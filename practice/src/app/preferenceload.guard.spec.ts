import { TestBed } from '@angular/core/testing';

import { PreferenceloadGuard } from './preferenceload.guard';

describe('PreferenceloadGuard', () => {
  let guard: PreferenceloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferenceloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
