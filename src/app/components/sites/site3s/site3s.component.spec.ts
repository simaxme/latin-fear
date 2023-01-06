import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site3sComponent } from './site3s.component';

describe('Site3sComponent', () => {
  let component: Site3sComponent;
  let fixture: ComponentFixture<Site3sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Site3sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site3sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
