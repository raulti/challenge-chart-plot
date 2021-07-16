import { TestBed } from '@angular/core/testing';
import { LineModel, SerieModel } from '../model/chart.model';
import { DataService } from './data.service';

describe('DataService', () => {
    let dataService: DataService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [DataService]
        });

        dataService = TestBed.get(DataService);
    });

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });

    it('Valid get started return', () => {
        dataService.started = true
        expect(dataService.getStarted()).toBe(true)
    });

    it('Valid set started value', () => {
        dataService.setStarted(false)
        expect(dataService.getStarted()).toBeFalse()
    });

    it('Valid endTimestamp and beginTimestamp', () => {
        dataService.setLimitTimestamp(102030, 405060)
        expect(dataService.getBeginTimestamp()).toBe(102030)
        expect(dataService.getEndTimestamp()).toBe(405060)
    });

    it('find line by name', () => {
        let serie = new SerieModel(1, 0.1)
        let chartLine = new LineModel("ab_cd_xf", [serie]);

        dataService.createNewChartModel()
        dataService.addChartLine(chartLine);

        expect(dataService.getLineByNameIdentifier("ab_cd_xf")).toBeInstanceOf(LineModel)
    });
});