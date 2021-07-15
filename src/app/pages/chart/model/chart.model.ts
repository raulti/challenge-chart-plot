export class ChartModel {
    lines!: LineModel[];
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
    name: number;
    value: number;
    constructor(name: number, value: number) {
        this.name = name;
        this.value = value;
    }
}