import {Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list.component'
import {EventsDetailsComponent} from './events/events-details/events-details.component'
import { CreateEventComponent } from './events/events-create.component';
import { Error404Component } from './errors/404.component';
import {EventRouteActivator} from './events/events-details/events-route-activator-service'

export const appRoutes:Routes =[
    {path:'events/new', component: CreateEventComponent },
    {path:'events', component: EventsListComponent },
    {path:'events/:id', component: EventsDetailsComponent,canActivate:[EventRouteActivator] },
    {path:'404', component: Error404Component, },
    {path:'',redirectTo:'/events',pathMatch:'full'}
    
]