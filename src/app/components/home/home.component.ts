import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  skills:any[] = ['html5','java','css3','javascript','bootstrap','angular','liferay','unity','jquery'];
  positions:any[] = [];
  px:string = 'px';

  constructor() {

  }

  ngOnInit() {

    for(let p of this.skills) {

      this.positions.push({
        'top' : Math.floor(Math.random() * window.innerHeight * 0.99),
        'left' : Math.floor(Math.random() * window.innerWidth)
      });
    }

    this.animate();

  }

  animate(){


    for(var i = 0; i< this.positions.length; i++) {

      if(this.positions[i].top > window.innerHeight - 100) {

        this.positions[i].top = Math.floor(Math.random() * window.innerHeight - 100);

      } else {

        this.positions[i].top += Math.floor(Math.random() + 1) + 5;

      }
      if(this.positions[i].left > window.innerWidth - 150) {

        this.positions[i].left = 0;

      } else {

        this.positions[i].left += Math.floor(Math.random()) + 1;

      }

    }

    requestAnimationFrame(()=>this.animate());
  }


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
