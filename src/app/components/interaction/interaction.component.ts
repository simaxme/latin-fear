import { Component } from '@angular/core';
import {PageService} from "../../services/page.service";

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent {
  constructor(
    public pageService: PageService
  ) {
  }
}
