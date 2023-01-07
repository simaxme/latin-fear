import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site6sComponent } from './site6s.component';

describe('Site6sComponent', () => {
  let component: Site6sComponent;
  let fixture: ComponentFixture<Site6sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Site6sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site6sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
