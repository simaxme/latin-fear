import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLabelComponent } from './animated-label.component';

describe('AnimatedLabelComponent', () => {
  let component: AnimatedLabelComponent;
  let fixture: ComponentFixture<AnimatedLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
