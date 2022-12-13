import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site1sComponent } from './site1s.component';

describe('Site1sComponent', () => {
  let component: Site1sComponent;
  let fixture: ComponentFixture<Site1sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Site1sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Site1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
