import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferneceComponent } from './prefernece.component';

describe('PreferneceComponent', () => {
  let component: PreferneceComponent;
  let fixture: ComponentFixture<PreferneceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferneceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferneceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
