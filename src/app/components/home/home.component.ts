import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor() {}

  openLinkedin(){
    let url = "https://www.linkedin.com/in/manuel-zambrano-4507b948/";
    window.open(url,'_blank');
  }
  openInstagram(){
    let url = "https://www.instagram.com/zambra4a/";
    window.open(url,'_blank');
  }
  openTwitter(){
    let url = "https://twitter.com/zambra4a";
    window.open(url,'_blank');
  }

}
