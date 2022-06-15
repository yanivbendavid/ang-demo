import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanivComponent } from './yaniv.component';

describe('YanivComponent', () => {
  let component: YanivComponent;
  let fixture: ComponentFixture<YanivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
