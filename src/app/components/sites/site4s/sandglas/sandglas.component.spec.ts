import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandglasComponent } from './sandglas.component';

describe('SandglasComponent', () => {
  let component: SandglasComponent;
  let fixture: ComponentFixture<SandglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
