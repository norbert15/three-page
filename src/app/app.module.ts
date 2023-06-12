import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ContentComponent } from './shared/components/content/content.component';
import { CatGuard } from './core/guard/cat-guard.guard';
import { LoggedInComponent } from './layouts/logged-in/logged-in.component';
import { LoginGuard } from './core/guard/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    LoggedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CatGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
