import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaTitleComponent } from './busqueda-title.component';

describe('BusquedaTitleComponent', () => {
  let component: BusquedaTitleComponent;
  let fixture: ComponentFixture<BusquedaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusquedaTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
