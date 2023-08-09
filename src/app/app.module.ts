import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { MatchesModule } from './matches/matches.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
  ],
  imports: [
    AuthModule,
    MatchesModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
