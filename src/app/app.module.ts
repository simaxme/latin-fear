import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { CardComponent } from './components/card/card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InteractionComponent } from './components/interaction/interaction.component';
import { IntroComponent } from './components/sites/intro/intro.component';
import { WaveComponent } from './components/sites/intro/wave/wave.component';
import { Site1sComponent } from './components/sites/site1s/site1s.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardComponent,
    InteractionComponent,
    IntroComponent,
    WaveComponent,
    Site1sComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
