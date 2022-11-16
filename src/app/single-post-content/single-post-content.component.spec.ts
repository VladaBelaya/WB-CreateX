import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostContentComponent } from './single-post-content.component';

describe('SinglePostContentComponent', () => {
  let component: SinglePostContentComponent;
  let fixture: ComponentFixture<SinglePostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePostContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
