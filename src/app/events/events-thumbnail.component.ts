import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: "events-thumbnail",
    templateUrl: "./events-thumbnail.component.html"
})

export class EventsThumbNailComponent {
    @Input() eventthumbnail: any;
}