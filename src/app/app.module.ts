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
import { Site2sComponent } from './components/sites/site2s/site2s.component';
import { AnimatedLabelComponent } from './components/animated-label/animated-label.component';
import { Site3sComponent } from './components/sites/site3s/site3s.component';
import { Site4sComponent } from './components/sites/site4s/site4s.component';
import { SandglasComponent } from './components/sites/site4s/sandglas/sandglas.component';
import { Site5sComponent } from './components/sites/site5s/site5s.component';
import { Site6sComponent } from './components/sites/site6s/site6s.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardComponent,
    InteractionComponent,
    IntroComponent,
    WaveComponent,
    Site1sComponent,
    Site2sComponent,
    AnimatedLabelComponent,
    Site3sComponent,
    Site4sComponent,
    SandglasComponent,
    Site5sComponent,
    Site6sComponent
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
