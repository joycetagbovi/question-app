import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionslistComponent } from './questionslist.component';

describe('QuestionslistComponent', () => {
  let component: QuestionslistComponent;
  let fixture: ComponentFixture<QuestionslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
