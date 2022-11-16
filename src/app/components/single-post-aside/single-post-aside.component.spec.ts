import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostAsideComponent } from './single-post-aside.component';

describe('SinglePostAsideComponent', () => {
  let component: SinglePostAsideComponent;
  let fixture: ComponentFixture<SinglePostAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePostAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePostAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
