import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewCommon: boolean = false;
  constructor(private route: Router) {
    this.route.events.subscribe((event) => {
      if (this.route.url === "login"){
        this.viewCommon = true;
        console.log(this.viewCommon, 'sasaf');
      }
    });
  }
}
