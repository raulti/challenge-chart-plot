import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data/data.service';

import { PlottingComponent } from './plotting.component';

describe('PlottingComponent', () => {
  let component: PlottingComponent;
  let fixture: ComponentFixture<PlottingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlottingComponent ],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
