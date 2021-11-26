import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarconocimientoComponent } from './editarconocimiento.component';

describe('EditarconocimientoComponent', () => {
  let component: EditarconocimientoComponent;
  let fixture: ComponentFixture<EditarconocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarconocimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
