import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public anlbunsId: Array<number>;

  constructor() {    
    this.anlbunsId = [1, 2, 3];
  }

}
