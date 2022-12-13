import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { VitrineComponent } from './Components/vitrine/vitrine.component';
import { HomeComponent } from './Components/home/home.component';
import { routing } from './app.routing';
import { CustomizadoComponent } from './Components/customizado/customizado.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VitrineComponent,
    HomeComponent,
    CustomizadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


