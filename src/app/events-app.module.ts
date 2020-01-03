import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventsThumbNailComponent} from './events/events-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from './events/shared/events-service'
import { ToastrService } from './common/toastr-service'
import {EventsDetailsComponent} from './events/events-details/events-details.component'
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import {CreateEventComponent} from './events/events-create.component'
import { Error404Component } from './errors/404.component';
import {EventRouteActivator} from './events/events-details/events-route-activator-service'

@NgModule({
  declarations: [
    EventComponent,
    EventsListComponent,
    EventsThumbNailComponent,
    EventsDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator
  ],
  bootstrap: [EventComponent]
})
export class AppModule { }
