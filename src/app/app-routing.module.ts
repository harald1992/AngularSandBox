import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './components/server-data-binding/servers/servers.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { PracticeStuffComponent } from './components/practice-stuff/practice-stuff.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'practice-stuff', component: PracticeStuffComponent },
  { path: 'server-data-binding', component: ServersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
