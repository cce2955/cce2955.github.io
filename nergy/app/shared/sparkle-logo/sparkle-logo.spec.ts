import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleLogo } from './sparkle-logo';

describe('SparkleLogo', () => {
  let component: SparkleLogo;
  let fixture: ComponentFixture<SparkleLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkleLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(SparkleLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
