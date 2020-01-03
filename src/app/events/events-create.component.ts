import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl:"./events-create.component.html"
})
export class CreateEventComponent{

    constructor(private router:Router){

    }

    cancel(){
        this.router.navigate(["/events"]);
    }

}