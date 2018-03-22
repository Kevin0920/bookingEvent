import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

declare var $: any;
declare var jquery: any;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  user = {
    first_name: "",
    last_name: "",
    email: "",
    date:"",
    location:"",
  }

  events = {
    eventName: "",
    date: "",
    price: "",
    location: ""
  }

  allEvents = [];

  event: string;

  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this._service.user;
    if (this._service.user === null) {
      this._router.navigate(['']);
    }
    this._service.retrieveEvent((res) => {
      this.allEvents = res;
      // console.log(res);
    });
  }

  joinEvent(event_id) {
    this._service.joinEvent(event_id, (res) => {
      this._service.retrieveEvent((res) => {
        this.allEvents = res;
        console.log(res);
      });
    })
  }

  cancel(event_id) {
    this._service.cancel(event_id, (res) => {
      this._service.retrieveEvent((res) => {
        this.allEvents = res;
        console.log(res);
      });
    })
  }


  createEvent() {
    this._service.createEvent(this.events, (res) => {
      // console.log('create event ts', this.events);
      this._service.retrieveEvent((res) => {
        this.allEvents = res;
      })
      this.events = {
        eventName: "",
        date: "",
        price: "",
        location: ""
      }
    });


  }

  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }

  deleteEvent(id) {
    this._service.deleteEvent(id, (res)=>{
      this.allEvents = res;
    });
  }

}
