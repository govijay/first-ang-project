import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>

  `
})
export class EventComponent {
  title = 'Angular Events Site';
}
