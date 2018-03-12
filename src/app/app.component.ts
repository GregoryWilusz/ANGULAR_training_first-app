import { Component } from '@angular/core';

// JS object in component's decorator is to configure it and tells the Angular what to do with this class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {

}
