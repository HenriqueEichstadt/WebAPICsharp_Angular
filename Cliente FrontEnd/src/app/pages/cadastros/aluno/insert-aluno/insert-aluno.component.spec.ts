import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAlunoComponent } from './insert-aluno.component';

describe('InsertAlunoComponent', () => {
  let component: InsertAlunoComponent;
  let fixture: ComponentFixture<InsertAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
