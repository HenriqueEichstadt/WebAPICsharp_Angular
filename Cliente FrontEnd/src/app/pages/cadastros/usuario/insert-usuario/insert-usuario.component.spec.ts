import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUsuarioComponent } from './insert-usuario.component';

describe('InsertUsuarioComponent', () => {
  let component: InsertUsuarioComponent;
  let fixture: ComponentFixture<InsertUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
