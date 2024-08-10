import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedvideosComponent } from './likedvideos.component';

describe('LikedvideosComponent', () => {
  let component: LikedvideosComponent;
  let fixture: ComponentFixture<LikedvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikedvideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
