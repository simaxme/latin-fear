import { Component } from '@angular/core';
import {PageComponent} from "./page/page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private pages: PageComponent[] = [];

  public registerComponent(component: PageComponent): number {
    let currentHeight = 0;
    this.pages.forEach(element => currentHeight+=element.height);
    this.pages.push(component);
    return currentHeight;
  }

}
