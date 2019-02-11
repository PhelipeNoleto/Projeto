import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOrdensComponent } from './cadastro-ordens.component';

describe('CadastroOrdensComponent', () => {
  let component: CadastroOrdensComponent;
  let fixture: ComponentFixture<CadastroOrdensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroOrdensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOrdensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
