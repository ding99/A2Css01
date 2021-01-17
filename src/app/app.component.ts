import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2Css01';
  sites = ['Google','Facebook','Twitter'];
  mySite = this.sites[1];
}
