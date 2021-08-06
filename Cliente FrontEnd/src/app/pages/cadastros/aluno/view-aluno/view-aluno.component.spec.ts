import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlunoComponent } from './view-aluno.component';

describe('ViewAlunoComponent', () => {
  let component: ViewAlunoComponent;
  let fixture: ComponentFixture<ViewAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
