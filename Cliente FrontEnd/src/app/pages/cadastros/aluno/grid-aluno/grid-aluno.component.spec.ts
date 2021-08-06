import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAlunoComponent } from './grid-aluno.component';

describe('GridAlunoComponent', () => {
  let component: GridAlunoComponent;
  let fixture: ComponentFixture<GridAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
