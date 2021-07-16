import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataModel } from '../model/data.model';

import { DataComponent } from './data.component';
import { DataService } from './data.service';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call make function with valid json data', () => {
    spyOn(component, 'make').and.callThrough();
    const sampleEvents = new DataModel().sampleEvents;
    component.jsonString = sampleEvents
    component.make()
    expect(component.make).toHaveBeenCalled();
  });

  it('Create valid line name', () => {
    spyOn(component, 'makeLineNameIdentifier').and.callThrough();

    let arrayGroup = ["os", "browser"]
    let eventData = { "type": "data", "timestamp": 1519862400000, "os": "linux", "browser": "chrome", "min_response_time": 0.1, "max_response_time": 1.3 }
    let select = 'min_response_time'

    let result = component.makeLineNameIdentifier(arrayGroup, eventData, select)
    expect(component.makeLineNameIdentifier).toHaveBeenCalled();
    expect(result).toBe('linux_chrome_min_response_time');
  });
});
