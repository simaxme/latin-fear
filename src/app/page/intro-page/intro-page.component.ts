import {Component, Host, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {PageComponent} from "../page.component";

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent {
  constructor(
    @Host() public pageComponent: PageComponent
  ) {
  }

}
