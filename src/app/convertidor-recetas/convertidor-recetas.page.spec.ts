import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertidorRecetasPage } from './convertidor-recetas.page';

describe('ConvertidorRecetasPage', () => {
  let component: ConvertidorRecetasPage;
  let fixture: ComponentFixture<ConvertidorRecetasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertidorRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
