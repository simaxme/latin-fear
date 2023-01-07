import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site4sComponent } from './site4s.component';

describe('Site4sComponent', () => {
  let component: Site4sComponent;
  let fixture: ComponentFixture<Site4sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Site4sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site4sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
