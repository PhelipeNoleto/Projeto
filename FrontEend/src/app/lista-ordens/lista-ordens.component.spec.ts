import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdensComponent } from './lista-ordens.component';

describe('ListaOrdensComponent', () => {
  let component: ListaOrdensComponent;
  let fixture: ComponentFixture<ListaOrdensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOrdensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
