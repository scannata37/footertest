import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFooterComponent } from './material-footer.component';

describe('MaterialFooterComponent', () => {
  let component: MaterialFooterComponent;
  let fixture: ComponentFixture<MaterialFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
