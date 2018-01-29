import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  allEvents;
  editEvents = {
    eventName:"",
    location:"",
    date:"",
    price:""
  }
  user;

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
    this.user = this._service.user;
    this._service.retrieveEvent(res => {
      this.allEvents = res;
      console.log(this.allEvents);
    })
  }

  editEvent(id) {
    this._service.update(id, this.editEvents, (res) => {
      console.log('edit event ts');
      this.editEvents={
        eventName:"",
        location:"",
        date:"",
        price:""
      }
    });
  }

  logout(){
    this._service.logout();
    this._router.navigate(['']);
  }

}
