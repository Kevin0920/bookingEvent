webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_event_edit_event_component__ = __webpack_require__("../../../../../src/app/edit-event/edit-event.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], pathMatch: "full" },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_3__events_events_component__["a" /* EventsComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */] },
    { path: 'event/:id', component: __WEBPACK_IMPORTED_MODULE_5__show_show_component__["a" /* ShowComponent */] },
    { path: 'editEvent/:id', component: __WEBPACK_IMPORTED_MODULE_6__edit_event_edit_event_component__["a" /* EditEventComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_event_edit_event_component__ = __webpack_require__("../../../../../src/app/edit-event/edit-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // <-- Import FormsModule








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__show_show_component__["a" /* ShowComponent */],
                __WEBPACK_IMPORTED_MODULE_11__edit_event_edit_event_component__["a" /* EditEventComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCtp-QzkIR4QSrXNJMEHRX9Wn_d0vBSmjQ'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit-event/edit-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*:focus{\n    outline: none;\n    background-color: #ed9cd6;\n}\n\nbody {\n    background: url(/assets/images/pexels-photo-139764.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n    height: 100vh;\n}\n\n.container {\n    opacity: 0.9;\n    background-color: beige;\n    height: 300px;\n    border-radius: 10px;\n    border: 10px solid;\n    padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-event/edit-event.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/create']\">\n            <strong style=\"font-size: 20px;\">Home</strong>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <button class=\"btn btn-danger\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"container\">\n    <h1>{{user?.first_name}}</h1>\n    <hr>\n\n    <div *ngFor=\"let e of allEvents\">\n      <form (submit)=\"editEvent(e._id)\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <strong>Event Name:</strong>\n            <input type=\"text\" required [(ngModel)]=\"editEvents.eventName\" name=\"eventName\"\n            placeholder=\"{{e.eventName}}\">\n          </div>\n          <div class=\"col-sm\">\n            <strong>Location:</strong>\n            <select class=\"custom-select\" name=\"location\" [(ngModel)]=\"editEvents.location\">\n                <option value=\"AL\">Alabama</option>\n                <option value=\"AK\">Alaska</option>\n                <option value=\"AZ\">Arizona</option>\n                <option value=\"AR\">Arkansas</option>\n                <option value=\"CA\">California</option>\n                <option value=\"CO\">Colorado</option>\n                <option value=\"CT\">Connecticut</option>\n                <option value=\"DE\">Delaware</option>\n                <option value=\"DC\">District Of Columbia</option>\n                <option value=\"FL\">Florida</option>\n                <option value=\"GA\">Georgia</option>\n                <option value=\"HI\">Hawaii</option>\n                <option value=\"ID\">Idaho</option>\n                <option value=\"IL\">Illinois</option>\n                <option value=\"IN\">Indiana</option>\n                <option value=\"IA\">Iowa</option>\n                <option value=\"KS\">Kansas</option>\n                <option value=\"KY\">Kentucky</option>\n                <option value=\"LA\">Louisiana</option>\n                <option value=\"ME\">Maine</option>\n                <option value=\"MD\">Maryland</option>\n                <option value=\"MA\">Massachusetts</option>\n                <option value=\"MI\">Michigan</option>\n                <option value=\"MN\">Minnesota</option>\n                <option value=\"MS\">Mississippi</option>\n                <option value=\"MO\">Missouri</option>\n                <option value=\"MT\">Montana</option>\n                <option value=\"NE\">Nebraska</option>\n                <option value=\"NV\">Nevada</option>\n                <option value=\"NH\">New Hampshire</option>\n                <option value=\"NJ\">New Jersey</option>\n                <option value=\"NM\">New Mexico</option>\n                <option value=\"NY\">New York</option>\n                <option value=\"NC\">North Carolina</option>\n                <option value=\"ND\">North Dakota</option>\n                <option value=\"OH\">Ohio</option>\n                <option value=\"OK\">Oklahoma</option>\n                <option value=\"OR\">Oregon</option>\n                <option value=\"PA\">Pennsylvania</option>\n                <option value=\"RI\">Rhode Island</option>\n                <option value=\"SC\">South Carolina</option>\n                <option value=\"SD\">South Dakota</option>\n                <option value=\"TN\">Tennessee</option>\n                <option value=\"TX\">Texas</option>\n                <option value=\"UT\">Utah</option>\n                <option value=\"VT\">Vermont</option>\n                <option value=\"VA\">Virginia</option>\n                <option value=\"WA\">Washington</option>\n                <option value=\"WV\">West Virginia</option>\n                <option value=\"WI\">Wisconsin</option>\n                <option value=\"WY\">Wyoming</option>\n              </select>\n          </div>\n          <div class=\"col-sm\">\n            <strong>Date:</strong>\n            <div class='input-group date'>\n                <input type='date' class=\"form-control\" name=\"date\" [(ngModel)]=\"editEvents.date\" min=\"\tdata-fv-date-min\" required\n                />\n              </div>\n          </div>\n          <div class=\"col-sm\">\n            <strong>Price:</strong>\n            <div class=\"input-group\">\n                <div class=\"input-group-addon\">$</div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{e.price}}\" name=\"price\" [(ngModel)]=\"editEvents.price\" required >\n                <div class=\"input-group-addon\">.00</div>\n              </div>\n          </div>\n        </div>\n        <button class=\"btn btn-warning\">Edit</button>\n      </form>\n    </div>\n\n\n  </div>\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/edit-event/edit-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditEventComponent = (function () {
    function EditEventComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.editEvents = {
            eventName: "",
            location: "",
            date: "",
            price: ""
        };
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        this._service.retrieveEvent(function (res) {
            _this.allEvents = res;
            console.log(_this.allEvents);
        });
    };
    EditEventComponent.prototype.editEvent = function (id) {
        var _this = this;
        this._service.update(id, this.editEvents, function (res) {
            console.log('edit event ts');
            _this.editEvents = {
                eventName: "",
                location: "",
                date: "",
                price: ""
            };
        });
    };
    EditEventComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    EditEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-event',
            template: __webpack_require__("../../../../../src/app/edit-event/edit-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-event/edit-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditEventComponent);
    return EditEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    background: url(/assets/images/pexels-photo-352876.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n    height: 100vh;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/create']\">\n            <strong style=\"font-size: 20px;\">Event Dashboard</strong>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <button class=\"btn btn-danger\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"container\">\n    <h1>Edit Your Profile</h1>\n    <hr>\n    <form (submit)=\"updateInfo()\">\n      <fieldset>\n        <div class=\"form-group\">\n          <label>First Name:</label>\n          <input type=\"text\" name=\"first_name\" [(ngModel)]=\"user.first_name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Last Name:</label>\n          <input type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Email:</label>\n          <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Location:</label>\n          <select class=\"custom-select\" name=\"location\" [(ngModel)]=\"user.location\">\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n      </fieldset>\n      <button class=\"btn btn-info\">Update Records</button>\n    </form>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user = {
            first_name: "",
            last_name: "",
            email: "",
            location: ""
        };
    }
    EditComponent.prototype.ngOnInit = function () {
        if (this._service.user === null) {
            this._router.navigate(['']);
        }
    };
    EditComponent.prototype.updateInfo = function () {
        this._service.updateInfo(this.user);
        this._router.navigate(['create']);
        this.user = {
            first_name: "",
            last_name: "",
            email: "",
            location: ""
        };
    };
    EditComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    background: url(/assets/images/pexels-photo-265047.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n    height: 100vh;\n  }\n\ntable {\n    font-size: 25px;\n    background-color: #3333;\n}\n\n#scrollbar {\n    max-height: 500px;\n    overflow: scroll;\n    padding: 10px;\n    border: 1px solid black;\n}\n\n.text-danger {\n    background-color: #222;\n}\n\n#card-header {\n    background-color: #222;\n}\n\nh2 {\n    text-align: center;\n}\n\n.row {\n    margin: 0px;\n}\n\n\n#body {\n    height: 600px;\n}\n\nfieldset {\n    margin-bottom: 50px;\n    background-color: #3333;\n}\n\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid lightseagreen;\n    border-radius: 4px;\n}\n\n\n/* Footer section  */\n#myFooter {\n    background-color: #182c39;\n    color: white;\n    padding-top: 20px;\n}\n\n#map-container {\n    height: 200px;\n    width: 100%;\n    margin-top: 30px;\n    margin-bottom: 10px;\n}\n\n#myFooter .row {\n    margin: 0 85px;\n}\n\n#myFooter .footer-copyright {\n    background-color: #10222e;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    text-align: center;\n}\n\n#myFooter .footer-copyright p {\n    margin: 10px;\n    color: #ccc;\n}\n\n#myFooter .container {\n    width: auto;\n}\n\n#myFooter ul {\n    list-style-type: none;\n    padding-left: 0;\n    line-height: 1.7;\n}\n\n#myFooter h5 {\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-top: 30px;\n}\n\n#myFooter a {\n    color: #d2d1d1;\n    text-decoration: none;\n}\n\n#myFooter a:hover,\n#myFooter a:focus {\n    text-decoration: none;\n    color: white;\n}\n\n#myFooter .social-networks {\n    text-align: center;\n    padding-top: 30px;\n    padding-bottom: 38px;\n}\n\n#myFooter .fa {\n    font-size: 30px;\n    margin-right: 15px;\n    margin-left: 20px;\n    background-color: white;\n    color: #182c39;\n    border-radius: 51%;\n    padding: 10px;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 31px;\n    text-decoration: none;\n    transition: color 0.2s;\n}\n\n#myFooter .fa-facebook:hover {\n    color: #2b55ff;\n}\n\n#myFooter .fa-facebook:focus {\n    color: #2b55ff;\n}\n\n#myFooter .fa-github:hover {\n    color: red;\n}\n\n#myFooter .fa-github:focus {\n    color: red;\n}\n\n#myFooter .fa-twitter:hover {\n    color: #00aced;\n}\n\n#myFooter .fa-twitter:focus {\n    color: #00aced;\n}\n\n@media screen and (max-width: 767px) {\n    #myFooter {\n        text-align: center;\n    }\n    #myFooter .row {\n        margin: 0;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/edit', user._id]\">\n            <strong style=\"font-size: 20px;\">Edit Profile</strong>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <button class=\"btn btn-danger\" (click)=\"logout()\">Log Out</button>\n  </nav>\n  <div class=\"card border-danger mb-3\" style=\"max-width: 20rem;\">\n    <div id=\"card-header\" class=\"text-danger\">\n      <h2>Welcome, {{user?.first_name}} !</h2>\n    </div>\n    <div class=\"card-body text-danger\">\n      <h5 class=\"card-title\">Location: {{user?.location}}</h5>\n      <h5 class=\"card-text\">Contact Email: {{user?.email}}</h5>\n    </div>\n  </div>\n\n  <div id=\"body\" class=\"container\">\n    <div id=\"scrollbar\">\n      <h3>Here are some of the events at your state:</h3>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Location</th>\n            <th scope=\"col\">Host</th>\n            <th scope=\"col\">Action/Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-success\" *ngFor=\"let e of allEvents\">\n            <th scope=\"row\" *ngIf=\"e.location === user.location\">\n              <a [routerLink]=\"['/event', e._id]\">{{e.eventName}}</a>\n            </th>\n            <td *ngIf=\"e.location === user.location\">{{e.date | date: \"longDate\"}}</td>\n            <td *ngIf=\"e.location === user.location\">{{e.location}}</td>\n            <td *ngIf=\"e.location === user.location\">{{e._host.first_name}}</td>\n            <td *ngIf=\"e.location === user.location\">\n              <button class=\"btn btn-danger\" *ngIf=\"e._host._id === user._id\" (click)=\"deleteEvent(e._id)\">Delete</button>\n\n              <button class=\"btn btn-info\" *ngIf=\"e._host._id === user._id\" [routerLink]=\"['/editEvent', e._id]\">\n                Edit</button>\n\n              <button class=\"btn btn-outline-info\" *ngIf=\"e._host._id !== user._id && e._join_user.includes(user._id)\" (click)=\"cancel(e._id)\">\n                <span>\n                  Joining =>\n                </span>\n                Cancel\n              </button>\n\n              <button class=\"btn btn-warning\" *ngIf=\"e._host._id !== user._id && !e._join_user.includes(user._id)\" (click)=\"joinEvent(e._id)\">Join</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h3>Here are some of the events at your state:</h3>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Location</th>\n            <th scope=\"col\">Host</th>\n            <th scope=\"col\">Action/Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-danger\" *ngFor=\"let a of allEvents\">\n            <th scope=\"row\" *ngIf=\"a.location !== user.location\">\n              <a [routerLink]=\"['/event', a._id]\">{{a.eventName}}</a>\n            </th>\n            <td *ngIf=\"a.location !== user.location\">{{a.date | date:\"longDate\"}}</td>\n            <td *ngIf=\"a.location !== user.location\">{{a.location}}</td>\n            <td *ngIf=\"a.location !== user.location\">{{a._host.first_name}}</td>\n            <td *ngIf=\"a.location !== user.location\">\n\n              <button class=\"btn btn-outline-info\" *ngIf=\"a._host._id !== user._id && \n                a._join_user.includes(user._id)\" (click)=\"cancel(a._id)\">\n                <span>\n                  Joining =>\n                </span>\n                Cancel\n              </button>\n\n              <button class=\"btn btn-warning\" *ngIf=\"a._host._id !== user._id && !a._join_user.includes(user._id)\" (click)=\"joinEvent(a._id)\">Join</button>\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <section>\n    <div class=\"container\">\n      <form (submit)=\"createEvent()\" #formData=\"ngForm\">\n        <fieldset>\n          <legend>Add a Event</legend>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>Name:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Add an event\" name=\"eventName\" [(ngModel)]=\"events.eventName\" required\n                minlength=\"3\" #makeEvent=\"ngModel\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"makeEvent.invalid && (makeEvent.dirty || makeEvent.touched)\">\n            <strong>\n              Warning! Date can not be empty !!!\n            </strong>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class='col-sm-6'>\n                <div class=\"form-group\">\n                  <label>Date:</label>\n                  <div class='input-group date'>\n                    <input type='date' class=\"form-control\" name=\"date\" [(ngModel)]=\"events.date\" min=\"\tdata-fv-date-min\" required #dateTime=\"ngModel\"\n                    />\n                    <span class=\"input-group-addon\">\n                      <span class=\"glyphicon glyphicon-calendar\"></span>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"dateTime.invalid && (dateTime.dirty || dateTime.touched)\">\n            <strong>\n              Warning! Please write event at least 3 characters long !!!\n            </strong>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <label>Price:</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-addon\">$</div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Price....\" name=\"price\" [(ngModel)]=\"events.price\" required #eventPrice=\"ngModel\">\n                  <div class=\"input-group-addon\">.00</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"eventPrice.invalid && (eventPrice.dirty || eventPrice.touched)\">\n            <strong>\n              Warning! Please give a price to this event !!!\n            </strong>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                  <label>Location:</label>\n                  <select class=\"custom-select\" name=\"location\" [(ngModel)]=\"events.location\" required #loca=\"ngModel\">\n                    <option value=\"AL\">Alabama</option>\n                    <option value=\"AK\">Alaska</option>\n                    <option value=\"AZ\">Arizona</option>\n                    <option value=\"AR\">Arkansas</option>\n                    <option value=\"CA\">California</option>\n                    <option value=\"CO\">Colorado</option>\n                    <option value=\"CT\">Connecticut</option>\n                    <option value=\"DE\">Delaware</option>\n                    <option value=\"DC\">District Of Columbia</option>\n                    <option value=\"FL\">Florida</option>\n                    <option value=\"GA\">Georgia</option>\n                    <option value=\"HI\">Hawaii</option>\n                    <option value=\"ID\">Idaho</option>\n                    <option value=\"IL\">Illinois</option>\n                    <option value=\"IN\">Indiana</option>\n                    <option value=\"IA\">Iowa</option>\n                    <option value=\"KS\">Kansas</option>\n                    <option value=\"KY\">Kentucky</option>\n                    <option value=\"LA\">Louisiana</option>\n                    <option value=\"ME\">Maine</option>\n                    <option value=\"MD\">Maryland</option>\n                    <option value=\"MA\">Massachusetts</option>\n                    <option value=\"MI\">Michigan</option>\n                    <option value=\"MN\">Minnesota</option>\n                    <option value=\"MS\">Mississippi</option>\n                    <option value=\"MO\">Missouri</option>\n                    <option value=\"MT\">Montana</option>\n                    <option value=\"NE\">Nebraska</option>\n                    <option value=\"NV\">Nevada</option>\n                    <option value=\"NH\">New Hampshire</option>\n                    <option value=\"NJ\">New Jersey</option>\n                    <option value=\"NM\">New Mexico</option>\n                    <option value=\"NY\">New York</option>\n                    <option value=\"NC\">North Carolina</option>\n                    <option value=\"ND\">North Dakota</option>\n                    <option value=\"OH\">Ohio</option>\n                    <option value=\"OK\">Oklahoma</option>\n                    <option value=\"OR\">Oregon</option>\n                    <option value=\"PA\">Pennsylvania</option>\n                    <option value=\"RI\">Rhode Island</option>\n                    <option value=\"SC\">South Carolina</option>\n                    <option value=\"SD\">South Dakota</option>\n                    <option value=\"TN\">Tennessee</option>\n                    <option value=\"TX\">Texas</option>\n                    <option value=\"UT\">Utah</option>\n                    <option value=\"VT\">Vermont</option>\n                    <option value=\"VA\">Virginia</option>\n                    <option value=\"WA\">Washington</option>\n                    <option value=\"WV\">West Virginia</option>\n                    <option value=\"WI\">Wisconsin</option>\n                    <option value=\"WY\">Wyoming</option>\n                  </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"loca.invalid && (loca.dirty || loca.touched)\">\n            <strong>\n              Warning! Please give a price to this event !!!\n            </strong>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formData.valid\">Add an Event</button>\n        </fieldset>\n      </form>\n    </div>\n  </section>\n\n  <!-- Footer Section -->\n  <footer id=\"myFooter\">\n    <div class=\"social-networks\">\n      <a href=\"#\" class=\"twitter\">\n        <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a href=\"#\" class=\"facebook\">\n        <i class=\"fa fa-facebook\"></i>\n      </a>\n      <a href=\"#\" class=\"google\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n    </div>\n    <div class=\"footer-copyright\">\n      <p>© 2017 Kevin Ke </p>\n    </div>\n  </footer>\n  <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = (function () {
    function EventsComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.user = {
            first_name: "",
            last_name: "",
            email: "",
            date: "",
            location: ""
        };
        this.events = {
            eventName: "",
            date: "",
            price: "",
            location: ""
        };
        this.allEvents = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        if (this._service.user === null) {
            this._router.navigate(['']);
        }
        this._service.retrieveEvent(function (res) {
            _this.allEvents = res;
            // console.log(res);
        });
    };
    EventsComponent.prototype.joinEvent = function (event_id) {
        var _this = this;
        this._service.joinEvent(event_id, function (res) {
            _this._service.retrieveEvent(function (res) {
                _this.allEvents = res;
                console.log(res);
            });
        });
    };
    EventsComponent.prototype.cancel = function (event_id) {
        var _this = this;
        this._service.cancel(event_id, function (res) {
            _this._service.retrieveEvent(function (res) {
                _this.allEvents = res;
                console.log(res);
            });
        });
    };
    EventsComponent.prototype.createEvent = function () {
        var _this = this;
        this._service.createEvent(this.events, function (res) {
            // console.log('create event ts', this.events);
            _this._service.retrieveEvent(function (res) {
                _this.allEvents = res;
            });
            _this.events = {
                eventName: "",
                date: "",
                price: "",
                location: ""
            };
        });
    };
    EventsComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    EventsComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        this._service.deleteEvent(id, function (res) {
            _this.allEvents = res;
        });
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n    color: #e05e55;\n    font-family: 'Berkshire Swash', cursive;\n    font-size: 18px;\n  }\n  \n  .custom-select {\n    width: 100%;\n    /* background-color: #333; */\n    height: 45px;\n  }\n\n  h1 {\n      color: #59B2E0;\n      text-align: center;\n      font-size: 60px;\n      font-family: 'Berkshire Swash', cursive;\n      margin: 50px;\n      padding: 10px;\n  }\n  \n  \n  #home {\n    background: url(/assets/images/pexels-photo-274192.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n    height: 950px;\n    font-family: 'Berkshire Swash', cursive;\n  }\n  .panel {\n      background-color: #8888;\n  }\n  .panel-login {\n      border-color: #ccc;\n      box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n  }\n  .panel-login>.panel-heading {\n      color: #00415d;\n      background-color: #333;\n      opacity: 0.9;\n      border-color: #fff;\n      text-align:center;\n    margin: 0px;\n  }\n  .panel-login>.panel-heading a{\n      text-decoration: none;\n      color:#59B2E6;\n      font-weight: bold;\n      font-size: 30px;\n      transition: all 0.1s linear;\n  }\n  .panel-login>.panel-heading a.active{\n      color: #15c4a1;\n      font-size: 30px;\n  }\n  .panel-login>.panel-heading hr{\n      margin-top: 10px;\n      margin-bottom: 0px;\n      clear: both;\n      border: 0;\n      height: 1px;\n      background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n  }\n  .panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n      height: 45px;\n      border: 1px solid #ddd;\n      font-size: 25px;\n      color: #fff;\n      background-color: #333;\n      opacity: 0.9;\n      transition: all 0.1s linear;\n  }\n  .panel-login input:hover,\n  .panel-login input:focus {\n      outline:none;\n      box-shadow: none;\n      border-color: #ccc;\n  }\n  .btn-login {\n      background-color: #59B2E0;\n      color: #fff;\n      font-size: 20px;\n      height: auto;\n      font-weight: bold;\n      padding: 14px 0;\n      text-transform: uppercase;\n      border-color: #59B2E6;\n  }\n  .btn-login:hover,\n  .btn-login:focus {\n      color: #fff;\n      background-color: #53A3CD;\n      border-color: #53A3CD;\n  }\n  .forgot-password {\n      text-decoration: underline;\n      color: #888;\n  }\n  .forgot-password:hover,\n  .forgot-password:focus {\n      text-decoration: underline;\n      color: #666;\n  }\n  \n  .btn-register {\n      background-color: #1CB94E;\n      outline: none;\n      color: #fff;\n      font-size: 20px;\n      height: auto;\n      font-weight: bold;\n      padding: 14px 0;\n      text-transform: uppercase;\n      border-color: #1CB94A;\n  }\n  .btn-register:hover,\n  .btn-register:focus {\n      color: #fff;\n      background-color: #1CA347;\n      border-color: #1CA347;\n  }\n\n\n/* Footer section  */\n#myFooter {\n    background-color: #182c39;\n    color: white;\n    padding-top: 20px;\n}\n\n#map-container {\n    height: 200px;\n    width: 100%;\n    margin-top: 30px;\n    margin-bottom: 10px;\n}\n\n#myFooter .row {\n    margin: 0 85px;\n}\n\n#myFooter .footer-copyright {\n    background-color: #10222e;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    text-align: center;\n}\n\n#myFooter .footer-copyright p {\n    margin: 10px;\n    color: #ccc;\n}\n\n#myFooter .container {\n    width: auto;\n}\n\n#myFooter ul {\n    list-style-type: none;\n    padding-left: 0;\n    line-height: 1.7;\n}\n\n#myFooter h5 {\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-top: 30px;\n}\n\n#myFooter a {\n    color: #d2d1d1;\n    text-decoration: none;\n}\n\n#myFooter a:hover,\n#myFooter a:focus {\n    text-decoration: none;\n    color: white;\n}\n\n#myFooter .social-networks {\n    text-align: center;\n    padding-top: 30px;\n    padding-bottom: 38px;\n}\n\n#myFooter .fa {\n    font-size: 30px;\n    margin-right: 15px;\n    margin-left: 20px;\n    background-color: white;\n    color: #182c39;\n    border-radius: 51%;\n    padding: 10px;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 31px;\n    text-decoration: none;\n    transition: color 0.2s;\n}\n\n#myFooter .fa-facebook:hover {\n    color: #2b55ff;\n}\n\n#myFooter .fa-facebook:focus {\n    color: #2b55ff;\n}\n\n#myFooter .fa-github:hover {\n    color: red;\n}\n\n#myFooter .fa-github:focus {\n    color: red;\n}\n\n#myFooter .fa-twitter:hover {\n    color: #00aced;\n}\n\n#myFooter .fa-twitter:focus {\n    color: #00aced;\n}\n\n@media screen and (max-width: 767px) {\n    #myFooter {\n        text-align: center;\n    }\n    #myFooter .row {\n        margin: 0;\n    }\n}\nagm-map {\n    height: 200px;\n}\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n  <link href=\"https://fonts.googleapis.com/css?family=Concert+One\" rel=\"stylesheet\">\n  <link href=\"https://fonts.googleapis.com/css?family=Berkshire+Swash\" rel=\"stylesheet\">\n</head>\n\n<body>\n  <section id=\"home\" class=\"tt-fullHeight\" data-stellar-vertical-offset=\"50\" data-stellar-background-ratio=\"0.2\">\n    <br>\n    <br>\n    <br>\n    <div class=\"container animated fadeInLeft\">\n      <h1 class=\"animated infinite rubberBand\">Booking an Event Now!</h1>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div class=\"panel panel-login\">\n            <div class=\"panel-heading\">\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <i class=\"fa fa-key\" style=\"color:#fff; font-size:25px;\"></i>\n                  <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n                </div>\n                <div class=\"col-xs-6\">\n                  <i class=\"fa fa-user-plus\" style=\"color:#fff; font-size:25px;\"></i>\n                  <a href=\"#\" id=\"register-form-link\">Register</a>\n                </div>\n              </div>\n              <hr>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <form id=\"login-form\" (submit)=\"login()\" #formData2=\"ngForm\" style=\"display: block;\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" name=\"email\" [(ngModel)]=\"user_login.email\" required pattern=\"[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]*\\.([a-z]{2,4})\"\n                        class=\"form-control\" placeholder=\"Email\" #login_email=\"ngModel\">\n\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf=\"login_email.invalid && (login_email.dirty || login_email.touched)\">\n                      <strong>Warning! please fill in your email !!!</strong>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <input type=\"password\" name=\"password\" [(ngModel)]=\"user_login.password\" required minlength=\"5\" id=\"password\" class=\"form-control\"\n                        placeholder=\"Password\" #login_password=\"ngModel\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"login_password.invalid && (login_password.dirty || login_password.touched)\">\n                      <strong>A Wow! password is required !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 col-sm-offset-3\">\n                          <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n\n\n                  <!-- Registration Section  -->\n                  <form id=\"register-form\" (submit)=\"register()\" #formData1=\"ngForm\" style=\"display: none;\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"user_reg.first_name\" required minlength=\"3\" #firstName=\"ngModel\" class=\"form-control\" name=\"first_name\"\n                        placeholder=\"First Name\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n                      <strong>Warning! user name is required and must be 3 characters long !!!\n                      </strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"user_reg.last_name\" required minlength=\"3\" #lastName=\"ngModel\" class=\"form-control\" name=\"last_name\"\n                        placeholder=\"Last Name\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n                      <strong>Warning! user name is required and must be 3 characters long !!!\n                      </strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <input type=\"email\" [(ngModel)]=\"user_reg.email\" required pattern=\"[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]*\\.([a-z]{2,4})\" #email=\"ngModel\"\n                        name=\"email\" class=\"form-control\" placeholder=\"Email Address\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                      <strong>A Wow! email is required and checking the format !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <select class=\"custom-select\" [(ngModel)]=\"user_reg.location\" name=\"location\">\n                        <option value=\"AL\">Alabama</option>\n                        <option value=\"AK\">Alaska</option>\n                        <option value=\"AZ\">Arizona</option>\n                        <option value=\"AR\">Arkansas</option>\n                        <option value=\"CA\">California</option>\n                        <option value=\"CO\">Colorado</option>\n                        <option value=\"CT\">Connecticut</option>\n                        <option value=\"DE\">Delaware</option>\n                        <option value=\"DC\">District Of Columbia</option>\n                        <option value=\"FL\">Florida</option>\n                        <option value=\"GA\">Georgia</option>\n                        <option value=\"HI\">Hawaii</option>\n                        <option value=\"ID\">Idaho</option>\n                        <option value=\"IL\">Illinois</option>\n                        <option value=\"IN\">Indiana</option>\n                        <option value=\"IA\">Iowa</option>\n                        <option value=\"KS\">Kansas</option>\n                        <option value=\"KY\">Kentucky</option>\n                        <option value=\"LA\">Louisiana</option>\n                        <option value=\"ME\">Maine</option>\n                        <option value=\"MD\">Maryland</option>\n                        <option value=\"MA\">Massachusetts</option>\n                        <option value=\"MI\">Michigan</option>\n                        <option value=\"MN\">Minnesota</option>\n                        <option value=\"MS\">Mississippi</option>\n                        <option value=\"MO\">Missouri</option>\n                        <option value=\"MT\">Montana</option>\n                        <option value=\"NE\">Nebraska</option>\n                        <option value=\"NV\">Nevada</option>\n                        <option value=\"NH\">New Hampshire</option>\n                        <option value=\"NJ\">New Jersey</option>\n                        <option value=\"NM\">New Mexico</option>\n                        <option value=\"NY\">New York</option>\n                        <option value=\"NC\">North Carolina</option>\n                        <option value=\"ND\">North Dakota</option>\n                        <option value=\"OH\">Ohio</option>\n                        <option value=\"OK\">Oklahoma</option>\n                        <option value=\"OR\">Oregon</option>\n                        <option value=\"PA\">Pennsylvania</option>\n                        <option value=\"RI\">Rhode Island</option>\n                        <option value=\"SC\">South Carolina</option>\n                        <option value=\"SD\">South Dakota</option>\n                        <option value=\"TN\">Tennessee</option>\n                        <option value=\"TX\">Texas</option>\n                        <option value=\"UT\">Utah</option>\n                        <option value=\"VT\">Vermont</option>\n                        <option value=\"VA\">Virginia</option>\n                        <option value=\"WA\">Washington</option>\n                        <option value=\"WV\">West Virginia</option>\n                        <option value=\"WI\">Wisconsin</option>\n                        <option value=\"WY\">Wyoming</option>\n                      </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <input type=\"password\" name=\"password\" [(ngModel)]=\"user_reg.password\" #password=\"ngModel\" required minlength=\"5\" class=\"form-control\"\n                        placeholder=\"Password\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                      <strong>A Wow! password is required and must be 5 characters long !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <input type=\"password\" [(ngModel)]=\"pass_confir\" required minlength=\"9\" #pw_confirm=\"ngModel\" pattern=\"{{user_reg.password}}\"\n                        placeholder=\"password confirmation\" class=\"form-control\" name=\"pw_confirm\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"pw_confirm.invalid && (pw_confirm.dirty || pw_confirm.touched)\">\n                      <strong>A Wow! password is not matched !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 col-sm-offset-3\">\n                          <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <footer id=\"myFooter\">\n    <div class=\"container\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n    </div>\n    <div class=\"social-networks\">\n      <a href=\"#\" class=\"twitter\">\n        <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a href=\"#\" class=\"facebook\">\n        <i class=\"fa fa-facebook\"></i>\n      </a>\n      <a href=\"#\" class=\"google\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n    </div>\n    <div class=\"footer-copyright\">\n      <p>© 2017 Kevin Ke </p>\n    </div>\n  </footer>\n  <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    // userSocial: SocialUser;
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user_reg = {
            first_name: "",
            last_name: "",
            email: "",
            location: "",
            password: "",
        };
        this.user_login = {
            email: "",
            password: ""
        };
        this.err_message = {
            email: "",
            password: ""
        };
        this.lat = 37.335480;
        this.lng = -121.893028;
        this.zoom = 12;
    }
    LoginComponent.prototype.register = function () {
        var _this = this;
        console.log("register ts component", this.user_reg);
        this._service.register(this.user_reg, function (res) {
            if (res.success === "success") {
                _this._router.navigate(['/create']);
            }
            else {
                _this.err_message.email = "This email has been registered";
            }
            _this.user_reg = {
                first_name: "",
                last_name: "",
                email: "",
                location: "",
                password: "",
            };
            _this.pass_com = "";
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._service.login(this.user_login, function (res) {
            if (res.message == "success") {
                console.log("ts login");
                _this._router.navigate(['/create']);
                _this.err_message.email = null;
            }
            else {
                _this.err_message.email = res.message;
            }
        });
        this.user_login = {
            email: "",
            password: ""
        };
    };
    LoginComponent.prototype.ngOnInit = function () {
        // jquery for the login form
        $(function () {
            $('#login-form-link').click(function (e) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            $('#register-form-link').click(function (e) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
        this.events = [];
        this.comments = [];
        if (localStorage.user !== undefined) {
            // console.log(this.user);
            this.user = JSON.parse(localStorage.user);
        }
    }
    // register user
    MainService.prototype.register = function (data, callback) {
        var _this = this;
        this._http.post("/register", data).subscribe(function (res) {
            console.log("from service register: ", res.json());
            callback(res.json());
            if (res.json().success = "success") {
                _this.user = res.json().user;
                localStorage.user = JSON.stringify(res.json().user);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.login = function (data, callback) {
        var _this = this;
        this._http.post("/login", data).subscribe(function (res) {
            callback(res.json());
            // console.log(res.json());
            _this.user = res.json().user;
            console.log(_this.user);
            localStorage.user = JSON.stringify(res.json().user);
        }, function (err) {
            console.log("error from login service: ", err);
        });
    };
    // Edit function
    MainService.prototype.updateInfo = function (data) {
        this._http.put('/user/edit/' + this.user._id, data).subscribe(function (res) {
            console.log("successfully update");
            localStorage.user = JSON.stringify(res.json().data);
        }, function (err) {
            console.log("failing update", err);
        });
    };
    MainService.prototype.update = function (id, event, callback) {
        console.log(event);
        this._http.put('/events/editEvent/' + id, event).subscribe(function (res) {
            console.log(res);
            callback(res.json());
        });
    };
    MainService.prototype.createEvent = function (events, callback) {
        this._http.post('/events/user/' + this.user._id, events).subscribe(function (res) {
            console.log(events);
            callback(res.json());
        }, function (err) { return console.error(err); });
    };
    MainService.prototype.createComment = function (event_id, comments, callback) {
        this._http.post('/comments/user/' + event_id + "/" + this.user._id, comments).subscribe(function (res) {
            console.log(comments);
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.retrieveEvent = function (callback) {
        this._http.get('/events').subscribe(function (res) {
            callback(res.json());
            // console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    // Retrieve one event 
    MainService.prototype.getOneEvent = function (event_id, callback) {
        this._http.get('/oneEvent/' + event_id).subscribe(function (res) {
            callback(res.json());
        });
    };
    // Get one comment
    MainService.prototype.retrieveComment = function (comment_id, callback) {
        this._http.get('/oneComment/' + comment_id).subscribe(function (res) {
            console.log(res);
            callback(res.json());
        });
    };
    // Join this event 
    MainService.prototype.joinEvent = function (event_id, callback) {
        var _this = this;
        console.log(event_id);
        this._http.post('/join/' + event_id + '/' + this.user._id, {}).subscribe(function (res) {
            console.log(_this.user._id);
            console.log(res);
            callback(res.json());
        });
    };
    MainService.prototype.cancel = function (event_id, callback) {
        var _this = this;
        console.log(event_id);
        this._http.post('/cancel/' + event_id + '/' + this.user._id, {}).subscribe(function (res) {
            console.log(_this.user._id);
            console.log("cancel join event service", res);
            callback(res.json());
        });
    };
    MainService.prototype.deleteEvent = function (id, callback) {
        this._http.delete('/events/' + id).subscribe(function (res) {
            console.log(res.json());
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.logout = function () {
        // console.log("logout service");
        localStorage.removeItem("user");
        console.log(localStorage.user);
        this.user = null;
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: url(/assets/images/pexels-photo-164642.jpeg);\n  background-position: center center;\n  background-size: cover;\n  background-attachment: fixed;\n  height: 100vh;\n  opacity: 0.9;\n}\n\n.container {\n  margin-bottom: 20px;\n}\n\n.text-info {\n  background-color: #222;\n}\n\n#card-header {\n  background-color: #222;\n}\n\n#scrollbar {\n  overflow-y: scroll;\n}\n\ntable {\n  font-size: 25px;\n  background-color: #2222;\n}\n\n/* Footer section  */\n\n#myFooter {\n  background-color: #182c39;\n  color: white;\n  padding-top: 20px;\n}\n\n#map-container {\n  height: 200px;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n#myFooter .row {\n  margin: 0 85px;\n}\n\n#myFooter .footer-copyright {\n  background-color: #10222e;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  text-align: center;\n}\n\n#myFooter .footer-copyright p {\n  margin: 10px;\n  color: #ccc;\n}\n\n#myFooter .container {\n  width: auto;\n}\n\n#myFooter ul {\n  list-style-type: none;\n  padding-left: 0;\n  line-height: 1.7;\n}\n\n#myFooter h5 {\n  font-size: 18px;\n  color: white;\n  font-weight: bold;\n  margin-top: 30px;\n}\n\n#myFooter a {\n  color: #d2d1d1;\n  text-decoration: none;\n}\n\n#myFooter a:hover,\n#myFooter a:focus {\n  text-decoration: none;\n  color: white;\n}\n\n#myFooter .social-networks {\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 38px;\n}\n\n#myFooter .fa {\n  font-size: 30px;\n  margin-right: 15px;\n  margin-left: 20px;\n  background-color: white;\n  color: #182c39;\n  border-radius: 51%;\n  padding: 10px;\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  line-height: 31px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n\n#myFooter .fa-facebook:hover {\n  color: #2b55ff;\n}\n\n#myFooter .fa-facebook:focus {\n  color: #2b55ff;\n}\n\n#myFooter .fa-github:hover {\n  color: red;\n}\n\n#myFooter .fa-github:focus {\n  color: red;\n}\n\n#myFooter .fa-twitter:hover {\n  color: #00aced;\n}\n\n#myFooter .fa-twitter:focus {\n  color: #00aced;\n}\n\n@media screen and (max-width: 767px) {\n  #myFooter {\n    text-align: center;\n  }\n  #myFooter .row {\n    margin: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/create']\">\n            <strong style=\"font-size: 20px;\">Events Dashboard</strong>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <button class=\"btn btn-danger\" (click)=\"logout()\">Log Out</button>\n  </nav>\n\n  <div class=\"container\">\n    <h1>Welcome {{user?.first_name}} !</h1>\n    <div class=\"card border-info mb-3\" style=\"max-width: 20rem;\">\n      <div class=\"card-header text-info\">\n        <h3 style=\"text-align: center;\">Hoster:\n          <span style=\"color:bisque\">{{event._host.first_name | uppercase}}</span>\n        </h3>\n      </div>\n      <div class=\"card-body text-info\">\n        <h5 class=\"card-title\">Date: {{event.date | date:'longDate'}}</h5>\n        <h5 class=\"card-title\">Location: {{event._host.location}}</h5>\n        <h5 class=\"card-title\">People who will join the event: {{event._join_user.length}}\n        </h5>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>Name</th>\n          <th scope=\"col\">\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            Location</th>\n          <th scope=\"col\">State</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-success\" *ngFor=\"let p of event._join_user\">\n          <th scope=\"row\">{{p.first_name}}</th>\n          <td>{{p.email}}</td>\n          <td>{{p.location}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"container\">\n    <h2>\n      <i class=\"fa fa-comments\" aria-hidden=\"true\"></i> Discussion about this event:</h2>\n    <div class=\"form-group\" *ngFor=\"let e of event._comment\" id=\"scrollbar\">\n      <h1>{{ e._message_poster.first_name }}</h1>\n      <h3>{{ e.content }}</h3>\n    </div>\n    <form (submit)=\"createComment()\" #formData=\"ngForm\">\n      <h3>Add Comment</h3>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <textarea class=\"form-control custom-control\" rows=\"10\" style=\"resize:none\" name=\"content\" [(ngModel)]=\"comments.content\"\n              placeholder=\"Add a comment....\" required minlength=\"3\" #makeComment=\"ngModel\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"makeComment.invalid && (makeComment.dirty || makeComment.touched)\">\n        <strong>\n          Please post something {{user?.first_name}} !!!\n        </strong>\n      </div>\n      <button class=\"btn btn-primary\">\n        <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n        Submit Comments</button>\n    </form>\n  </div>\n\n  <!-- Footer Section -->\n  <footer id=\"myFooter\">\n    <div class=\"social-networks\">\n      <a href=\"#\" class=\"twitter\">\n        <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a href=\"#\" class=\"facebook\">\n        <i class=\"fa fa-facebook\"></i>\n      </a>\n      <a href=\"#\" class=\"google\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n    </div>\n    <div class=\"footer-copyright\">\n      <p>© 2017 Kevin Ke </p>\n    </div>\n  </footer>\n  <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowComponent = (function () {
    function ShowComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.event = {
            _host: "",
            _join_user: ""
        };
        this.comments = {
            content: ""
        };
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        console.log(this.user);
        this._route.paramMap.subscribe(function (params) {
            _this._service.getOneEvent(params.get("id"), function (res) {
                console.log("get one event detail ts", res);
                _this.event = res;
                console.log(_this.event);
            });
        });
    };
    // When create an comment, same time retreive the comment will update same time  
    ShowComponent.prototype.createComment = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (parmas) {
            _this._service.createComment(parmas.get("id"), _this.comments, function (res) {
                console.log(res);
                _this._route.paramMap.subscribe(function (params) {
                    _this._service.getOneEvent(params.get("id"), function (res) {
                        console.log("get one event detail ts", res);
                        _this.event = res;
                        console.log(_this.event);
                    });
                });
            });
            _this.comments = {
                content: ""
            };
        });
    };
    ShowComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__("../../../../../src/app/show/show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map