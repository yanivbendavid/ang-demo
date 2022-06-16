import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, MatSliderModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
