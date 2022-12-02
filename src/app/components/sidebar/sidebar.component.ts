import {Component, Host} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    @Host() public appComponent: AppComponent
  ) {

  }

}
