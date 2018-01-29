import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch: "full" },
  { path:'create', component: EventsComponent },
  { path:'edit/:id', component: EditComponent },
  { path:'event/:id', component: ShowComponent },
  { path: 'editEvent/:id', component: EditEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
