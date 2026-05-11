import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightReel } from './highlight-reel';

describe('HighlightReel', () => {
  let component: HighlightReel;
  let fixture: ComponentFixture<HighlightReel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightReel],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightReel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
