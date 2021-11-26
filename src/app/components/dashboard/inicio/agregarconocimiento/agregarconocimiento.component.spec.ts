import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarconocimientoComponent } from './agregarconocimiento.component';

describe('AgregarconocimientoComponent', () => {
  let component: AgregarconocimientoComponent;
  let fixture: ComponentFixture<AgregarconocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarconocimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
