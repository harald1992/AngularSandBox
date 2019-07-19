import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AssignmentsModule } from './components/assignments/assignments.module';
import { PracticeStuffModule } from './components/practice-stuff/practice-stuff.module';
import { ServerDataBindingModule } from './components/server-data-binding/server-data-binding.module';
import { WebshopModule } from './components/webshop/webshop.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppDirectivesModule } from './shared/directives/directives.module';
import { DirectivesDeepDiveComponent } from './components/directives-deep-dive/directives-deep-dive.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DirectivesDeepDiveComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AssignmentsModule,
    PracticeStuffModule,
    ServerDataBindingModule,
    WebshopModule,
    AppDirectivesModule
  ],
  exports: [HeaderComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
