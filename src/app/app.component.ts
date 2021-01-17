import { Component } from '@angular/core';
import { Site } from './site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2Css01';
  sites = [
    new Site(1,'Google'),
    new Site(2,'Facebook'),
    new Site(3,'Twitter'),
    new Site(5,'Yahoo')
  ];
  mySite = this.sites[1];

  clickMessage = '';
  onClickMe(){
    if(this.clickMessage.length < 1)
      this.clickMessage = 'Clicked';
    else this.clickMessage = '';
  }
}
