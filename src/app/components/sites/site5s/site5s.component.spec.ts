import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site5sComponent } from './site5s.component';

describe('Site5sComponent', () => {
  let component: Site5sComponent;
  let fixture: ComponentFixture<Site5sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Site5sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site5sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
