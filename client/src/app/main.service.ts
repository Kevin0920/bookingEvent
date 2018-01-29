import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';

@Injectable()
export class MainService {
  events=[];
  comments=[];
  user;

  constructor(private _http: Http) {
    if (localStorage.user !== undefined) {
      // console.log(this.user);
      this.user = JSON.parse(localStorage.user);
    }
   }

  // register user
  register(data, callback) {
    this._http.post("/register", data).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
        if (res.json().success = "success") {
          this.user = res.json().user;
          localStorage.user = JSON.stringify(res.json().user);
        }
      },
      (err) => {
        console.log(err);
      })
  }

  login(data, callback) {
    this._http.post("/login", data).subscribe(
      (res) => {
        callback(res.json());
        // console.log(res.json());
        this.user = res.json().user;
        console.log(this.user);
        localStorage.user = JSON.stringify(res.json().user);
      },
      (err) => {
        console.log("error from login service: ", err);
      })
  }
  // Edit function
  updateInfo(data) {
    this._http.put('/user/edit/' + this.user._id, data).subscribe(
      (res)=>{
        console.log("successfully update");
        localStorage.user = JSON.stringify(res.json().data);
      },
      (err)=>{
        console.log("failing update", err);
      }
    )
  }

  update(id, event, callback) {
    console.log(event);
    this._http.put('/events/editEvent/' + id, event).subscribe(
      (res) => {
        console.log(res);
        callback(res.json());
      }
    )
  }

  createEvent(events, callback) {
    this._http.post('/events/user/' + this.user._id, events).subscribe(
      (res)=>{
        console.log(events);
        callback(res.json());
      },
      err => console.error(err)
    )
  }

  createComment(event_id, comments, callback) {
    this._http.post('/comments/user/' + event_id + "/" + this.user._id, comments).subscribe(
      (res)=>{
        console.log(comments);
        callback(res.json());
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  retrieveEvent(callback) {
    this._http.get('/events').subscribe(
      (res)=>{
        callback(res.json());
        // console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  // Retrieve one event 
  getOneEvent(event_id, callback) {
    this._http.get('/oneEvent/' + event_id).subscribe(
      (res) => {
        callback(res.json());
      }
    )
  }

  // Get one comment
  retrieveComment(comment_id, callback) {
    this._http.get('/oneComment/' + comment_id).subscribe(
      (res) => {
        console.log(res);
        callback(res.json());
      }
    )
  }

  // Join this event 
  joinEvent(event_id, callback) {
    console.log(event_id);
    this._http.post('/join/' + event_id + '/' + this.user._id, {}).subscribe(
      (res) => {
        console.log(this.user._id);
        console.log(res);
        callback(res.json());
      }
    )
  }

  cancel(event_id, callback) {
    console.log(event_id);
    this._http.post('/cancel/' + event_id + '/' + this.user._id, {}).subscribe(
      (res) => {
        console.log(this.user._id);
        console.log("cancel join event service",res);
        callback(res.json());
      }
    )
  }
  
  
  deleteEvent(id, callback) {
    this._http.delete('/events/' + id).subscribe(
      (res) => {
        console.log(res.json());
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }


  logout() {
    // console.log("logout service");
    localStorage.removeItem("user");
    console.log(localStorage.user);
    this.user = null;
  }
}
