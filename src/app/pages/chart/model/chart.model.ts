export class ChartModel {
    chart!: LineModel[];
}

export class LineModel {
    name: String;
    series: SerieModel[];
    constructor(name: String, series: SerieModel[]) {
        this.name = name;
        this.series = series;
    }
}

export class SerieModel {
    name: String;
    value: number;
    constructor(name: String, value: number) {
        this.name = name;
        this.value = value;
    }
}