import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/pages/chart/data/data.service';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify text button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').innerHTML).toContain("GENERATE CHART");
  });

  it('verify if button is clicable', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').innerHTML).toBeTruthy();
  });
});
