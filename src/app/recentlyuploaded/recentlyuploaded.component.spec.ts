import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyuploadedComponent } from './recentlyuploaded.component';

describe('RecentlyuploadedComponent', () => {
  let component: RecentlyuploadedComponent;
  let fixture: ComponentFixture<RecentlyuploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentlyuploadedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyuploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
