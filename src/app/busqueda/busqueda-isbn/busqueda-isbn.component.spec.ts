import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaIsbnComponent } from './busqueda-isbn.component';

describe('BusquedaIsbnComponent', () => {
  let component: BusquedaIsbnComponent;
  let fixture: ComponentFixture<BusquedaIsbnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusquedaIsbnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaIsbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
