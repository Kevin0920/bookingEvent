import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    EditComponent,
    ShowComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtp-QzkIR4QSrXNJMEHRX9Wn_d0vBSmjQ'
    })
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
