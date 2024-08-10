import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtoyouComponent } from './newtoyou.component';

describe('NewtoyouComponent', () => {
  let component: NewtoyouComponent;
  let fixture: ComponentFixture<NewtoyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewtoyouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtoyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
