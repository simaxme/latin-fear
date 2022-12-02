import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { WaveComponent } from './components/wave/wave.component';
import { IntroPageComponent } from './page/intro-page/intro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    WaveComponent,
    IntroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    IntroPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
