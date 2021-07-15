export class EventModel {
    type!: String;
    timestamp!: number;
    select!: String[];
    group!: String[];
    begin!: number;
    end!: number;
}

export class EventStartModel extends EventModel {
    constructor(event: EventModel) {
        super();
        this.type = event.type;
        this.timestamp = event.timestamp;
        this.select = event.select;
        this.group = event.group;
    }
}

export class EventSpantModel extends EventModel {
    constructor(event: EventModel) {
        super();
        this.type = event.type;
        this.timestamp = event.timestamp;
        this.begin = event.begin;
        this.end = event.end;
    }
}

export class EventStopModel extends EventModel {
    constructor(event: EventModel) {
        super();
        this.type = event.type;
        this.timestamp = event.timestamp;
    }
}

export class EventDataModel extends EventModel {
    eventData: any;
    constructor(event: EventModel) {
        super();
        this.type = event.type;
        this.timestamp = event.timestamp;
        this.eventData = event;
    }
}