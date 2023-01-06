import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site2sComponent } from './site2s.component';

describe('Site2sComponent', () => {
  let component: Site2sComponent;
  let fixture: ComponentFixture<Site2sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Site2sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site2sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
