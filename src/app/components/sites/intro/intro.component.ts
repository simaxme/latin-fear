import { Component } from '@angular/core';
import {animateNGIf} from "../../../animations/ngIfAnimation";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    animateNGIf(0.5, {
      maxHeight: "0vh",
      opacity: 0
    }, {
      maxHeight: "3em",
      opacity: "100%"
    }),
    animateNGIf(0.5, {
      opacity: 0
    }, {
      opacity: 1
    }, "animateOpacity")
  ]
})
export class IntroComponent {
  public step: number = 0;
}
