import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregardosComponent } from './agregardos.component';

describe('AgregardosComponent', () => {
  let component: AgregardosComponent;
  let fixture: ComponentFixture<AgregardosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregardosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregardosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
