  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsLikedComponent } from './items-liked.component';
import { By } from '@angular/platform-browser';
import { ImageService } from '../image/shared/image.service';
import { AuthService } from '../authService/auth.service';
import { LikedItemServiceService } from '../liked-item-service.service';

class MockAuthService extends AuthService {
  constructor() {
    super(null, null, null);
  }
}

class MockImageService extends ImageService {
  constructor() {
    super(null);
  }
}

class MockLikedItemService extends LikedItemServiceService {
  constructor() {
    super(null, null);
  }
}


fdescribe('ItemsLikedComponent', () => {
  let component: ItemsLikedComponent;
  let fixture: ComponentFixture<ItemsLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ImageService, useClass: MockImageService },
        { provide: LikedItemServiceService, useClass: MockLikedItemService }],
      declarations: [ ItemsLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check liked boolean function', () => {
    expect(component.isLiked).toBeTruthy();
  });
});
